import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [commonjs({
		build: {
			commonjsOptions: {
				transformMixedEsModules: true
			}
		}
	})]
};