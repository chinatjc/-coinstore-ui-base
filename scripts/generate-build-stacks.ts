import fsPromise from 'node:fs/promises';
import path from 'node:path';
import yaml from 'js-yaml';
import { glob } from 'glob';
import { getDirname } from '../utils';

const __dirname = getDirname(import.meta.url);

const readYamlFile = async <T = unknown>(path: string) => yaml.load(await fsPromise.readFile(path, 'utf-8')) as T;

/**
 * Set(['transition'])
 */
const computePackageNameSet = (pathList: string[]): Set<string> => {
  return new Set(
    pathList.reduce<string[]>((list, path) => {
      const packageName = path.split('/').at(-1);
      if (packageName) list.push(packageName);
      return list;
    }, []),
  );
};

const getPackageNameSet = async () => {
  const pnpmWorkspaceData = await readYamlFile<{ packages: string[] }>(
    path.resolve(__dirname, '../pnpm-workspace.yaml'),
  );
  const pathList = await glob(pnpmWorkspaceData.packages);
  const resultList = await Promise.allSettled(pathList.map((path) => fsPromise.stat(path)));

  return computePackageNameSet(
    pathList.filter((_, index) => {
      const result = resultList[index];
      return result.status === 'fulfilled' && result.value.isDirectory();
    }),
  );
};

const filterWorkspaceDependencies = (dependencies: Record<string, string>) => {
  const result = [];
  for (const [name, version] of Object.entries(dependencies)) {
    const SCOPE = '@coinstore-ui/';
    const isWorkspaceDependency = name.startsWith(SCOPE) && version.startsWith('workspace:');
    if (isWorkspaceDependency) result.push(name.replace(SCOPE, ''));
  }
  return result;
};

const generateBuildStacks = async () => {
  const buildStacks: Set<string>[] = [];
  let packageNameSet = await getPackageNameSet();
  /** Map([ [ packageName, buildLevel ] ]) */
  const packageNameMap = new Map<string, number>();

  do {
    const packages = await Promise.all(
      [...packageNameSet].map(async (packageName) => {
        const { default: packageJson } = (await import(
          path.resolve(__dirname, '../', `packages/${packageName}/package.json`),
          {
            assert: {
              type: 'json',
            },
          }
        )) as {
          default: {
            peerDependencies?: Record<string, string>;
            dependencies?: Record<string, string>;
          };
        };

        const dependencyNames = filterWorkspaceDependencies({
          ...(packageJson.peerDependencies ?? {}),
          ...(packageJson.dependencies ?? {}),
        });

        return { name: packageName, dependencyNames };
      }),
    );

    const { curStack, dependencyStack } = packages.reduce<{ curStack: Set<string>; dependencyStack: Set<string> }>(
      (result, packageInfo) => {
        result.curStack.add(packageInfo.name);
        packageInfo.dependencyNames.forEach((name) => result.dependencyStack.add(name));
        return result;
      },
      { curStack: new Set(), dependencyStack: new Set() },
    );

    curStack.forEach((name) => {
      const curStackIndex = (buildStacks.length + 1) * -1;
      const preStackIndex = packageNameMap.get(name);
      const needMove = curStackIndex !== preStackIndex;
      packageNameMap.set(name, curStackIndex);
      if (needMove && preStackIndex) buildStacks.at(preStackIndex)?.delete(name);
    });
    buildStacks.unshift(curStack);

    packageNameSet = dependencyStack;
  } while (packageNameSet.size);

  return buildStacks;
};

export default generateBuildStacks;
