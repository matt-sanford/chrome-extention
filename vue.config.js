module.exports = {
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  pages: {
    override: {
      template: 'public/browser-extension.html',
      entry: './src/override/main.js',
      title: 'Override'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {}
    }
  }
}
