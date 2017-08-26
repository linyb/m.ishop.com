var baseWebpackConfig = require('./webpack.base.conf')
const vuxLoader = require('vux-loader')
module.exports = vuxLoader.merge(baseWebpackConfig, {
  plugins: [
    {
      name: 'vux-ui'
    },
    {
      name: 'duplicate-style'
    },
    {
      name: 'less-theme',
      path: 'src/assets/theme.less'
    }
  ]
})
