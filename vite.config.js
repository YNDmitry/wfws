import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport()
  ],
  build: [
    {sourceMap: true}
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          `
            @import "./src/assets/scss/utilities/_variables.scss";
            @import "./src/assets/scss/utilities/_functions.scss";
            @import "./src/assets/scss/base/_fonts.scss";
          `,
        ]
      }
    }
  }
})
