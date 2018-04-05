//const preactCliSwPrecachePlugin = require('preact-cli-sw-precache');

/*https://dzone.com/articles/build-a-preact-app-with-authentication*/
/* https://www.codementor.io/drewpowers/high-performance-webpack-config-for-front-end-delivery-90sqic1qa */
export default (config, env, helpers) => {
	let { plugin } = helpers.getPluginsByName(config, "UglifyJsPlugin")[0];
	plugin.options.sourceMap = false
}

