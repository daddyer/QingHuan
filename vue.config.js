module.exports = {
  publicPath: './',
  assetsDir: 'assets',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://v.kieee.cn/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: { 
          "^/api": "" 
        }
      }
    }
  }
}