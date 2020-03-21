module.exports = {
  publicPath: '.',
  css: {
    loaderOptions: {
      // sass: {
      //   prependData: `@import "@/assets/styles/_app_vars.scss"`
      //
      scss: {
        prependData: `@import "@/assets/styles/shared/spacing.scss";`
      }
    }
  }
}
