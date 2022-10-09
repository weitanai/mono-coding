import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 设置省略拓展名列表，注：不建议忽略.vue,因为它会影响 IDE 和类型支持。
    extensions: ['.ts', '.js', '.tsx', '.vue']
  },
})
