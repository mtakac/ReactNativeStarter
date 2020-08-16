module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  plugins: [
    'react',
    'react-hooks',
    'simple-import-sort',
    'import',
    '@typescript-eslint',
    'jest',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'sort-imports': 'off',
    'no-void': 'off',
    curly: ['error', 'multi'],

    'import/order': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',

    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'react/prop-types': 'off',

    'simple-import-sort/sort': 'error',

    'prettier/prettier': 'error',
  },
};
