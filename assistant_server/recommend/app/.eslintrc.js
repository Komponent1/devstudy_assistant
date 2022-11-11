module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["airbnb", "airbnb-typescript"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    project: ["./**/**/**/tsconfig.json", "*/tsconfig.json"]
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-throw-literal": 0
  },
  "overrides": [],
  "ignorePatterns": ['.eslintrc.js', 'node_modules/**']
};
