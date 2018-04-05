const preactCliSwPrecachePlugin = require('preact-cli-sw-precache'); 
 
 /*https://dzone.com/articles/build-a-preact-app-with-authentication*/ 
 /* https://www.codementor.io/drewpowers/high-performance-webpack-config-for-front-end-delivery-90sqic1qa */ 
 export default function (config, env, helpers) { 

	//let { plugin } = helpers.getPluginsByName(config, "UglifyJsPlugin")[0];
	//plugin.options.sourceMap = false
	//console.log(config);
	if (env.production) {
		let { plugin } = helpers.getPluginsByName(config, "UglifyJsPlugin")[0];
		plugin.options.sourceMap = false

		//const precacheConfig = { 
		//	staticFileGlobs: [ 
		//		'build/**/*.{html,js,css,jpg}', 
		//		'build/assets/favicon.ico', 
		//		'build/assets/icons/*.png' 
		//	], 
		//	stripPrefix: 'build/', 
		//	navigateFallback: '/index.html', 
		//	runtimeCaching: [{ 
		//		urlPattern: /\/api\//, 
		//		handler: 'networkOnly' 
		//	}, { 
		//		urlPattern: '.*', 
		//		handler: 'cacheFirst' 
		//	}], 
		//	minify: true, 
		//	clientsClaim: true, 
		//	skipWaiting: true, 
		//	maximumFileSizeToCacheInBytes: 10*1024*1024 
		//}
		//return preactCliSwPrecachePlugin(config, precacheConfig); 
	} 	
}; 
 
