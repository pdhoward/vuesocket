const nodeSassMagicImporter = require(`node-sass-magic-importer`);

module.exports = {
  configureWebpack: {
    devServer: {
      clientLogLevel: `error`,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        importer: nodeSassMagicImporter(),
      },
    },
  },
  lintOnSave: false,
};
