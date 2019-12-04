const HtmlWebpackPlugin = require('html-webpack-plugin')
// const path = require('path')
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devServer: {
		host: 'localhost',
		port: '8081'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],
	module: { // 所有第三方，配置规则
		rules: [
			{
				test: /\.js|jsx$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]

	}
}