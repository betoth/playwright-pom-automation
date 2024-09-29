// eslint.config.mjs

import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import n from 'eslint-plugin-n';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // Default configuration for all files
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs', // or 'module' if you're using ESM
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      n,
      prettier: prettierPlugin,
    },
    rules: {
      // ESLint recommended rules
      ...js.configs.recommended.rules,

      // Node plugin recommended rules
      ...n.configs.recommended.rules,

      // Prettier plugin to report formatting issues
      'prettier/prettier': 'error',

      // Custom rules can be added here
    },
  },
  // Override configuration for test files
  {
    files: ['tests/**/*.js'],
    rules: {
      // Disable the rule for test files
      'n/no-unpublished-require': 'off',
    },
  },
  // Disable ESLint rules that might conflict with Prettier
  {
    rules: {
      ...prettier.rules,
    },
  },
];
