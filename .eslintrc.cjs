/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'plugin:vitest-globals/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    {
      "prettier/prettier": [
        "error",
        {
          "singleQuote": true,
          "parser": "flow"
        }
      ]
    }
  },
  env: {
    'vitest-globals/env': true,
  }
};
