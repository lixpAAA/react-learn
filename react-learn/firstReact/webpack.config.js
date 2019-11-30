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
	]
}