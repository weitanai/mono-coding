import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 设置省略拓展名列表，注：不建议忽略.vue,因为它会影响 IDE 和类型支持。
    extensions: [".ts", ".js", ".tsx", ".vue"]
  },
  server: {
    port: 8033, // 设置服务启动端口号
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
