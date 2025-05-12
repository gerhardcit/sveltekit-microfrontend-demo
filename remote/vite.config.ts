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
				// './remote-app': './src/routes/+page.svelte',
				// try and import the layout instead of the page
				// svelte routing does not seem to work with module federation
				'./remote-app': './src/routes/+layout.svelte',
			},
		}),
	],
	build: {
		target: 'chrome89',
	},
});
