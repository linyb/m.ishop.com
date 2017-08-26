module.exports = {
  root: true,
  env: {
    'amd': true,
    'es6': true,
    'browser': true,
    'node': true,
    'jquery': true
  },
  globals: {
    'think': true,
    'cySid': true,
    'briefUser': true,
    'upVer': true,
    'webInfo': true,
    'pushErrLog': true,
    'imgURL': true,
    'spiderAccessList': true,
    'getVer': true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      'ecmaVersion': 6,
      'impliedStrict': true,
      'globalReturn': true
    }
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    //'semi': ['warn', 'never'],
    'comma-dangle': 0,
    'import/no-unresolved': 0,
    'strict': 0,
    // 'strict': ['error', 'global'],
    // allow debugger during development
    'max-len': ["error", 180, 4, { "ignoreUrls": true }],
    'func-names': 0,
    'no-plusplus': 0,
    'global-require': 0,
    'no-unused-vars': 0,
    'semi': 0,
    'linebreak-style': 0,
    'space-before-function-paren': 0,
    'no-tabs': 0,
    'indent': 0,
    'statement': 0,
    'no-console': 'warn',
    'no-trailing-spaces': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //new add
  }
}
