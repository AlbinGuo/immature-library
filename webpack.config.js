const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'library', // 全就变量；指定的就是你使用require时的模块名。[this, window, global]
    libraryTarget: 'umd', // umd: 支持任何形式的引入方式；
  }
}