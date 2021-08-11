module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'max-len': ['off'],
    'no-param-reassign': 'off',
    'vue/max-attributes-per-line': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off',
    'no-shadow': ['error', { allow: ['state'] }],
  },
};
