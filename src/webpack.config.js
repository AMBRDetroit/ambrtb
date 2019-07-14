// we'll use the concat plugin to create our third-party includes
const ConcatPlugin = require('webpack-concat-plugin');

// create the config
const webappJSConfig = {
	// we have multiple entries
	entry : {
		// the ambrtb file
		"./../dist/ambrtb" : "./main.js",
	},
	output : {
		path : __dirname,
		filename : "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[ '@babel/preset-env', {
								targets : {
									"browsers" : [
										"last 1 version",
										"> 1%",
										"not dead"
									]
								},
								corejs: 3,
								useBuiltIns : "usage"
							}]
						]
					}
				}
			}
		]
	},
	plugins: [
		/*
		// the aggregate file for the website frameworks
		new ConcatPlugin({
			uglify: false, // or you can set uglifyjs options
			useHash: false, // md5 file
			sourceMap: false, // generate sourceMap
			name: 'frameworks', // used in html-webpack-plugin
			fileName: 'assets/js/dist/[name].js',
			filesToConcat: [
				__dirname + '/assets/js/src/third-party/simplr.min.js' ,
				__dirname + '/assets/js/src/third-party/moment.min.js',
				__dirname + '/assets/js/src/third-party/stickybits.min.js',
				__dirname + '/assets/js/src/third-party/bodyScrollLock.min.js',
				__dirname + '/assets/js/src/third-party/hammer.min.js'
			]
		})
		*/
	]
};

// minify and uglyfy the javascript
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
webappJSConfig.plugins.push(new UglifyJsPlugin());

// export the configs
module.exports = [webappJSConfig];