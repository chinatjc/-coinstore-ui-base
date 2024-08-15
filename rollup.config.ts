import type { Plugin, RollupOptions } from 'rollup';

import path from 'node:path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import { rimraf } from 'rimraf';
import generateBuildStacks from './scripts/generate-build-stacks';
import { getDirname } from './utils';

const __dirname = getDirname(import.meta.url);

/** harmony data import */
const handleScssImport: () => Plugin = () => {
  return {
    name: 'handle-scss-import',
    resolveId(source) {
      if (source.endsWith('.scss')) {
        return { id: source, external: true, moduleSideEffects: true };
      }
      return null;
    },
    load(id) {
      if (id.endsWith('.scss')) {
        return 'export default "this is sass file";';
      }
      return null;
    },
  };
};

const excludeDependenciesFromBundle: (options: { packageJsonDir: string }) => Plugin = ({ packageJsonDir }) => {
  return {
    name: 'exclude-dependencies-from-bundle',
    options: async (options) => {
      const { external = [] } = options;

      if (!Array.isArray(external)) {
        throw new Error('[exclude-dependencies-from-bundle] rollupConfig.external must be array! ');
      }

      const { default: packageJson } = (await import(path.join(packageJsonDir || process.cwd(), './package.json'), {
        assert: {
          type: 'json',
        },
      })) as {
        default: {
          peerDependencies?: Record<string, string>;
          dependencies?: Record<string, string>;
        };
      };

      const dependencies = [
        ...new Set([
          ...Object.keys(packageJson.peerDependencies ?? {}),
          ...Object.keys(packageJson.dependencies ?? {}),
        ]),
      ]
        .filter((dependency) => dependency)
        .map((dependency) => new RegExp(`^${dependency}(\\/.+)*$`));

      return {
        ...options,
        external: [...external, ...dependencies],
      };
    },
  };
};

const createConfig = async (packageName: string): Promise<RollupOptions> => {
  const resolveToAbsolutePath = (p = '') => path.resolve(`${__dirname}/packages/${packageName}`, p);
  const distPath = resolveToAbsolutePath('dist');

  await rimraf(distPath);

  return {
    input: resolveToAbsolutePath('src/index.tsx'),
    output: {
      dir: distPath,
      format: 'es',
      compact: true,
      preserveModules: true,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({
        compilerOptions: {
          outDir: distPath,
        },
        include: [resolveToAbsolutePath('src/**/*')],
        exclude: [resolveToAbsolutePath('src/**/__tests__/*'), resolveToAbsolutePath('src/**/__stories__/*')],
        tsconfig: './tsconfig.build.json',
      }),
      handleScssImport(),

      excludeDependenciesFromBundle({ packageJsonDir: resolveToAbsolutePath() }),

      /** copy src-*.scss file to dist */
      copy({
        targets: [
          {
            src: `${resolveToAbsolutePath('src')}/**/*.scss`,
            dest: distPath,
            rename: (_name, _extension, fullPath) => fullPath.replace(resolveToAbsolutePath('src'), ''),
          },
        ],
        flatten: true,
        hook: 'writeBundle',
      }),
    ],
    strictDeprecations: true,
  };
};

const configs = await Promise.all(
  (await generateBuildStacks()).reduce<ReturnType<typeof createConfig>[]>((configs, buildStacks) => {
    configs.push(...[...buildStacks].map((packageName) => createConfig(packageName)));
    return configs;
  }, []),
);

export default configs;
