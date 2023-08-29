module.exports = {
  overrides: [
    {
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
      ],
      files: ['*.cjs', '*.mjs'],
      rules: {
        'import/order': ['error', {
          alphabetize: {
            order: 'asc',
          },
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          pathGroups: [
            { pattern: './**', group: 'internal', position: 'after' },
            { pattern: '../**', group: 'internal', position: 'after' },
            { pattern: '@/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
        ],
        'import/extensions': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'import/no-unresolved': 'off',
      },
    },
    {
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:astro/recommended',
      ],
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'import/order': ['error', {
          alphabetize: {
            order: 'asc',
          },
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          pathGroups: [
            { pattern: './**', group: 'internal', position: 'after' },
            { pattern: '../**', group: 'internal', position: 'after' },
            { pattern: '@/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
        ],
        'astro/no-set-html-directive': 'error',
        'astro/no-unused-css-selector': 'warn',
        'import/extensions': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-tabs': ['error', { allowIndentationTabs: true }],
      },
    },
    {
      extends: [
        'airbnb',
        'airbnb-typescript',
      ],
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/order': ['error', {
          alphabetize: {
            order: 'asc',
          },
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always',
          pathGroups: [
            { pattern: './**', group: 'internal', position: 'after' },
            { pattern: '../**', group: 'internal', position: 'after' },
            { pattern: '@/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
        ],
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'max-lines': ['error', 100],
        '@typescript-eslint/naming-convention': 'off',
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
