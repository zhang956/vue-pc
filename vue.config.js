const path = require('path');

module.exports = {
  // 基础路径
  publicPath: process.env.NODE_ENV === 'production' ? '/prod/' : '/',

  // 输出目录
  outputDir: 'dist',
  devServer: {
    historyApiFallback: true,  //解决在history模式下的404页面问题
  },

  // 配置 Webpack
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },

  // 根据环境区分配置
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境配置
      config.optimization.splitChunks({
        chunks: 'all',
      });
    } else if (process.env.NODE_ENV === 'staging') {
      // 测试环境配置
      config.devtool('source-map');
    } else {
      // 开发环境配置
      config.devtool('eval-source-map');
    }
  },

  // 开发服务器配置
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_BASE_URL, // 动态代理地址
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};



