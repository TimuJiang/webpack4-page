const path = require('path');
const pluginsConfig = require("./webpack.plguins.js");
const rulesConfig = require("./webpack.rules.js");

module.exports = {
	entry: {
		index: './src/index.js',
		jquery: 'jquery'
	},
	output: {
		path:path.resolve(__dirname, 'dist'),
		filename: './js/[name].bundle.js'
	},
	plugins: pluginsConfig,
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		host: "localhost",
		port: "8899",
		open: true,
		hot: true
	},
	module:{
		rules: rulesConfig
	}
}
