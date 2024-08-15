import type { Linter } from 'eslint';

type ESLintPlugin = NonNullable<Linter.Config['plugins']>[keyof NonNullable<Linter.Config['plugins']>];
type ESLintRules = NonNullable<Linter.Config['rules']>;
type ESLintLanguageOptions = NonNullable<Linter.Config['languageOptions']>;

interface ReactPlugin {
  configs: {
    flat: Record<
      'recommended' | 'jsx-runtime',
      {
        plugins: { react: ESLintPlugin };
        rules: ESLintRules;
        languageOptions: ESLintLanguageOptions;
      }
    >;
  };
}

type ReactHooksPlugin = ESLintPlugin & { configs: Record<'recommended', { rules: ESLintRules }> };

type StorybookPlugin = ESLintPlugin & {
  configs: { recommended: { overrides: { files: string[]; rules: ESLintRules }[] } };
};

type JestPlugin = ESLintPlugin & { configs: Record<'flat/recommended' | 'flat/style', Linter.Config> };
type JestDomPlugin = ESLintPlugin & { configs: Record<'flat/recommended', Linter.Config> };

import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import tsEslint from 'typescript-eslint';
// @ts-ignore: ts(7016) because eslint-plugin-react has not type files.
import _reactPlugin from 'eslint-plugin-react';
// @ts-ignore: ts(7016) because eslint-plugin-react-hooks has not type files.
import _reactHooksPlugin from 'eslint-plugin-react-hooks';
// @ts-ignore: ts(7016) because eslint-plugin-storybook has not type files.
import * as _storybookPlugin from 'eslint-plugin-storybook';
// @ts-ignore: ts(7016) because eslint-plugin-jest has not type files.
import _jestPlugin from 'eslint-plugin-jest';
// @ts-ignore: ts(7016) because eslint-plugin-jest-dom has not type files.
import _jestDomPlugin from 'eslint-plugin-jest-dom';
import lodash from 'lodash-es';
import { fixupPluginRules } from '@eslint/compat';
import { getDirname } from './utils';

const extractConfigRules = (configs: Linter.Config[]) =>
  configs.reduce<NonNullable<Linter.Config['rules']>>((rules, config) => ({ ...rules, ...(config.rules ?? {}) }), {});

const __dirname = getDirname(import.meta.url);
const reactPlugin = _reactPlugin as ReactPlugin;
const reactHooksPlugin = _reactHooksPlugin as ReactHooksPlugin;
const storybookPlugin = _storybookPlugin as StorybookPlugin;
const jestPlugin = _jestPlugin as JestPlugin;
const jestDomPlugin = _jestDomPlugin as JestDomPlugin;

export default [
  {
    name: 'ES-modules',
    ignores: ['**/dist/**/*'],
    languageOptions: {
      globals: {
        __filename: 'off',
        __dirname: 'off',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-restricted-globals': [
        'error',
        { name: '__filename', message: '__filename is not defined in the ES module scope' },
        { name: '__dirname', message: '__dirname is not defined in the ES module scope' },
        { name: 'require', message: 'only use ES Module' },
        { name: 'module', message: 'only use ES Module' },
        { name: 'exports', message: 'only use ES Module' },
      ],
      ...prettierConfig.rules,
    },
  },
  {
    name: 'TypeScript',
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsEslint.parser as Linter.Parser,
      sourceType: 'module',
      ecmaVersion: 'latest',
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint.plugin as ESLintPlugin,
    },
    rules: {
      ...extractConfigRules(tsEslint.configs.strictTypeChecked as Linter.Config[]),
      ...extractConfigRules(tsEslint.configs.stylisticTypeChecked as Linter.Config[]),
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': { descriptionFormat: '^: ts\\(\\d+\\) because .+$' },
          'ts-ignore': { descriptionFormat: '^: ts\\(\\d+\\) because .+$' },
          'ts-nocheck': { descriptionFormat: '^: ts\\(\\d+\\) because .+$' },
          'ts-check': true,
          minimumDescriptionLength: 10,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    name: 'React',
    files: ['**/*.tsx'],
    settings: { react: { version: 'detect' } },
    languageOptions: {
      ...lodash.merge(
        {},
        reactPlugin.configs.flat.recommended.languageOptions,
        reactPlugin.configs.flat['jsx-runtime'].languageOptions,
      ),
    },
    plugins: {
      ...reactPlugin.configs.flat.recommended.plugins,
      ...reactPlugin.configs.flat['jsx-runtime'].plugins,
      'react-hooks': fixupPluginRules(reactHooksPlugin),
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactPlugin.configs.flat['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },
  {
    name: 'Storybook-story',
    files: ['**/__stories__/*.@(js|jsx|mjs|ts|tsx)'],
    plugins: {
      storybook: fixupPluginRules(storybookPlugin),
    },
    rules: storybookPlugin.configs.recommended.overrides.at(0)?.rules ?? undefined,
  },
  {
    name: 'Storybook-config',
    files: storybookPlugin.configs.recommended.overrides.at(1)?.files,
    plugins: {
      storybook: fixupPluginRules(storybookPlugin),
    },
    rules: storybookPlugin.configs.recommended.overrides.at(1)?.rules ?? undefined,
  },
  {
    name: 'Jest',
    files: ['**/__tests__/**/*.test.[jt]s?(x)'],
    plugins: {
      ...jestPlugin.configs['flat/recommended'].plugins,
      ...jestDomPlugin.configs['flat/recommended'].plugins,
    },
    languageOptions: jestPlugin.configs['flat/recommended'].languageOptions,
    rules: {
      ...jestPlugin.configs['flat/recommended'].rules,
      ...jestPlugin.configs['flat/style'].rules,
      ...jestDomPlugin.configs['flat/recommended'].rules,
    },
  },
] satisfies Linter.Config[];
