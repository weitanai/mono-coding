import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), AutoImport(), Components(), UnoCSS()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: ["chrome53", "safari12"],
    // outDir: '../server/app/public',
    emptyOutDir: true,
    manifest: true,
  }
});