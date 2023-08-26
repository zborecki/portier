module.exports = {
  overrides: [
    {
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
      ],
      files: ['*.ts', '*.js'],
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
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
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
