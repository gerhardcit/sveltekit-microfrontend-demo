import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		federation({
			name: 'host',
			remotes: {
				remote: {
					type: 'module',
					name: 'remote',
					entry: 'http://localhost:5174/remoteEntry.js',
					entryGlobalName: 'remote',
					shareScope: 'default',
				},
			},
			filename: 'remoteEntry.js',
		}),
	],
	build: {
		target: 'chrome89',
	},
});
