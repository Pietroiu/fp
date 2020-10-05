let path 		= require('path');
let webpack 	= require('webpack');
let limit    	= new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1});

module.exports = {
	mode: "production",
	entry: "./index.js",
	output: {
		path:path.resolve('./'),
		filename: "build.js",
		libraryTarget: 'umd',
		globalObject: "this"
	},
	resolve: {extensions:[".js"]},
	plugins: [limit],
	cache:false,
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader'
			}
		}]
	},
	watch:false,
	devtool: false
};