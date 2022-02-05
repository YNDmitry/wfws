import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import globalStyle from '@originjs/vite-plugin-global-style'
import commonjs from '@rollup/plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport(),
    globalStyle({
      sourcePath: 'src/assets/scss'
    }),
		commonjs()
  ],
	build: {
    commonjsOptions: {
      transformMixedEsModules: true,
			requireReturnsDefault: true
    },
  }
})
