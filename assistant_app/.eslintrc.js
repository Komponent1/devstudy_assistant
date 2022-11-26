module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        "import/prefer-default-export": 0,
        'no-undef': 'off',
      },
    },
  ],
};
