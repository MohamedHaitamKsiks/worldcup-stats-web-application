import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
		'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	proxy: {
		'/api': {
			target: 'https://apex.oracle.com/pls/apex/projet_si',
			changeOrigin: true
		}
	}
})
