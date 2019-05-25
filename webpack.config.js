const path = require('path');
const pluginsConfig = require("./webpack.plguins.js");
const rulesConfig = require("./webpack.rules.js");

module.exports = {
	entry: {
		// 多入口文件
		a: './src/js/index.js',
		b: './src/js/index2.js',
		jquery: 'jquery'
	},
	output: {
		path:path.resolve(__dirname, 'dist'),
		// 打包多出口文件
		// 生成 a.bundle.js  b.bundle.js  jquery.bundle.js
		filename: './js/[name].bundle.js'
	},
	plugins: pluginsConfig,
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		host: "localhost",
		port: "8090",
		open: true,
		hot: true
	},
	module:{
		rules: rulesConfig
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				lib1: {
					chunks: "initial",
					name: "test",
					enforce: true
				}
			}
		}
	}
}
