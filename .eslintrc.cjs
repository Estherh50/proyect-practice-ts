module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'ts-a11y/href-no-hash': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/no-array-index-key': ['off'],
    'no-shadow': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "args": "after-used",
        "props": "all",
        "argsIgnorePattern": "^_",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    'react/destructuring-assignment': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
