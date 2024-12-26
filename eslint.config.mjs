import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const compat = new FlatCompat({
  baseDirectory: _dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

console.log('_dirname:', _dirname);
console.log('Expected tsconfig.json path:', path.resolve(_dirname, './tsconfig.json'));

export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        project: path.resolve(_dirname, 'tsconfig.json'), // Absolute path to tsconfig.json
        tsconfigRootDir: _dirname,                       // Root directory of tsconfig.json
      },      
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends('eslint:recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:@typescript-eslint/stylistic'),
  ...compat.extends('plugin:playwright/recommended'),
  ...compat.extends('prettier'),

  {
    files: ['pages/**/**/*.{ts,js,tsx,jsx}'],
    rules: {
      'max-lines': [
        'error',
        { max: 200, skipBlankLines: true, skipComments: true },
      ],
      'max-lines-per-function': [
        'error',
        { max: 200, skipBlankLines: true, skipComments: true },
      ],
      complexity: ['error', 10],
      'no-console': 'off',
      'no-alert': 'error',
      camelcase: 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      'playwright/no-wait-for-timeout': 'error',
    },
  },

  {
    files: ['tests/**/**/*.spec.{ts,js,tsx,jsx}'],
    rules: {
      'playwright/no-wait-for-timeout': 'error',
      'playwright/no-standalone-expect': 'error',
      'playwright/no-skipped-test': 'off',
      'playwright/expect-expect': 'off',
    },
  },

  {
    ignores: [
      'node_modules/',
      'test-results/',
      'playwright-report',
      'playwright.config.ts',
      'reports/',
      '.vscode/*',
    ],
  },
];