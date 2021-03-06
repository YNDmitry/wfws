import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import globalStyle from '@originjs/vite-plugin-global-style'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport(),
    globalStyle({
      sourcePath: 'src/assets/scss'
    }),
  ],
})
