import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true,
		}),
		appDir: '_app',
		paths: {
			base: '/Hueku' // Use paths.base instead of base directly
		}
	},
	preprocess: vitePreprocess()
};

export default config;