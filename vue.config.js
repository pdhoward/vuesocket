
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? './'
  : '/',
  configureWebpack: {
    devServer: {
      clientLogLevel: `error`,
    },
  },
  lintOnSave: false,
};
