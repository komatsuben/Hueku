import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: '/Hueku',
	build:{
		assetsDir:'_app'
	}
});
