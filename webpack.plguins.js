const webpack = require("webpack");
const path = require('path');
const glob = require("glob");
//消除冗余的css
const purifyCssWebpack = require("purifycss-webpack");
// html模板
const htmlWebpackPlugin = require("html-webpack-plugin");
// 清除目录等
const cleanWebpackPlugin = require("clean-webpack-plugin");

// 分离css
const extractTextPlugin = require("extract-text-webpack-plugin");
//静态资源输出
const copyWebpackPlugin = require("copy-webpack-plugin");
module.exports = [
		new webpack.HotModuleReplacementPlugin(),
		// 调用之前先清除
		new cleanWebpackPlugin(["dist"]),
		// new uglifyjsWebpackPlugin(),
		new copyWebpackPlugin([{
			from: path.resolve(__dirname,"src/assets"),
			to: './public'
		}]),
		// 分离css插件参数为提取出去的路径
		// new extractTextPlugin("css/index.css"),
		new extractTextPlugin('css/[name].css'), //此处也可以根据splitChunkPlugin的chunk名字做对应
		// 消除冗余的css代码
		new purifyCssWebpack({
			// glob为扫描模块，使用其同步方法（请谨慎使用异步方法）
			paths: glob.sync(path.join(__dirname, "src/*.html"))
		}),
		// 全局暴露统一入口
		new webpack.ProvidePlugin({
			$: "jquery"
		}),
		// 自动生成html模板
		new htmlWebpackPlugin({
			filename: "index.html",
			name: "demo",
			chunks: ["index", "jquery"],
			template: "./index.html"
		})
]
