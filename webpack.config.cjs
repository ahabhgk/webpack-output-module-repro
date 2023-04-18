/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'development',
  devtool: false,
  output: {
    module: true,
    libraryTarget: "module"
  },
  experiments: {
    outputModule: true,
  },
  target: 'es2020',
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          test: /common\.js/,
          minSize: 0,
          chunks: 'all'
        }
      }
    }
  }
}