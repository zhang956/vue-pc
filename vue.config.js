const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint保存检测
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue-3-template/' : '', // 修改项目运行时的根路径
  outputDir: 'dist', // 构建时输出目录
  assetsDir: 'static', // 放置生成的静态资源的目录
  devServer: {
    historyApiFallback: true,  //解决在history模式下的404页面问题
  },
})
