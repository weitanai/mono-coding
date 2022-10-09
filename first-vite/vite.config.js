import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
})
