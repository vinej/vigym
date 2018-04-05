const preactCliSwPrecachePlugin = require('preact-cli-sw-precache');

export default function (config) {
	const precacheConfig = {
		staticFileGlobs: [
			'build/**/*.{html,js,css,jpg}',
			'build/assets/favicon.ico',
			'build/assets/icons/*.png'
		],
		stripPrefix: 'build/',
		navigateFallback: '/index.html',
		runtimeCaching: [{
			urlPattern: /\/api\//,
			handler: 'networkOnly'
		}, {
			urlPattern: '.*',
			handler: 'cacheFirst'
		}],
		minify: true,
		clientsClaim: true,
		skipWaiting: true,
		maximumFileSizeToCacheInBytes: 10*1024*1024
	};

	return preactCliSwPrecachePlugin(config, precacheConfig);
}