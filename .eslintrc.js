module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parse: 'babel-eslint',
    sourceType: 'module',
  },
  rules: {
    semi: [2,'never'],
    // "no-console": 2,
    'no-var': 2,
    'eqeqeq': 'error',
    'quotes': ['error', 'single'],
    'no-irregular-whitespace': 2,
    'no-multiple-empty-lines': [2, {'max': 1}],
    'no-trailing-spaces': 'error',
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' }
    ],
  },
}
