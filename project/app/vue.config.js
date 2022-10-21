const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint校验工具
  lintOnSave:false,
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: ' http://gmall-h5-api.atguigu.cn',
        //target: ' http://atguigu.cn',
        //pathRewrite: { '^/api': '' },
      },
    },
  },
})
