module.exports = {
  root: true,
  env: {
    node: true,
    brower: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        printWidth: 120,
        arrowParens: 'avoid',
        trailingComma: 'none'
      }
    ]
  }
};
