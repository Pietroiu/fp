let path 		 	= require('path');
let webpack 	= require('webpack');
let limit    	= new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1});

module.exports = {
	mode: "production",
	entry: "./build.js",
	output: {
		path:path.resolve('./src'),
		filename: "index.js"
	},
	resolve: {extensions:[".js"]},
	plugins: [limit],
	cache:false,
	module: {
		rules: [{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
		}]
	},
	devtool:'source-map'
};