const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/admin/core': {
        target: 'http://localhost:8110',
        // pathRewrite: { '^/ok': '' },
        ws: true, //用于支持websocket
        changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
})
