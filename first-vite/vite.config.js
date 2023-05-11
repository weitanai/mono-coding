import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import path from 'path';
// console.log(process.env.NODE_ENV, '-p-')
// const base = process.env.NODE_ENV === 'development' ? '/' : '/public';
// console.log('base---',base)
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    AutoImport(),
    Components(),
  ],
  base: '/',
  server: {
    port: 8081, // 设置服务启动端口号
    host: '127.0.0.1',
    open: true, // 设置服务启动时是否自动打开浏览器
    // 代理
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:14030/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  build: {
    target: ['chrome53', 'safari12'], // 浏览器兼容性
    emptyOutDir: true,
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(
          __dirname,
          "src/assets/global.less"
        )}";`,
      },
    },
  },


})
