import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		federation({
			name: 'remote',
			filename: 'remoteEntry.js',
			exposes: {
				'./remote-app': './src/routes/+page.svelte',
			},
		}),
	],
	build: {
		target: 'chrome89',
	},
});
