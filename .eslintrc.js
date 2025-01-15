module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: [1, 'always'],
    'class-methods-use-this': 0,
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'no-extra-boolean-cast': 0,
    curly: 0,
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-use-before-define': ['error', { functions: false }],
    'no-plusplus': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': ['warn', { ignore: ['navigation', 'route'] }],
    'react/display-name': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/no-array-index-key': 0,
    'react-native/no-inline-styles': 1,
    'react-native/split-platform-components': 0,
    'react-native/sort-styles': 0,
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any']
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 110
      }
    ],
    'no-console': 'warn'
  }
};
