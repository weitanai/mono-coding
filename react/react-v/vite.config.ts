import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import visualizer from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  visualizer({
    open: true, // 在构建完成后自动打开报告页面
    gzipSize: true, // 显示 gzip 后的大小
    brotliSize: true, // 显示 brotli 后的大小
    // 更多配置选项参考 https://github.com/btd/rollup-plugin-visualizer#options
  }),
  ],
  server: {
    port: 8022, // 设置服务启动端口号
    host: "127.0.0.1",
    open: true, // 设置服务启动时是否自动打开浏览器
    // 代理
    proxy: {
      "/api": {
        target: "http://127.0.0.1:14030/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      },
    },
  },
});

