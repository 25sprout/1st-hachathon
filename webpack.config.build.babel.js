import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import base from './webpack.config.babel';
import websiteJson from './config/website.json';

const webpackBuildConfig = {
	entry: base.entry,
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[hash:13].js',
		publicPath: '/',
	},
	module: {
		rules: base.module.rules.concat(
			Object.assign(base.module.cssRule, {
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: `${base.module.cssRule.use.css}?minimize=true!${base.module.cssRule.use.postcss}`,
				}),
			})
		),
	},
	plugins: [

		base.plugins.webpackEnvironment,

		base.plugins.loaderOptionsPlugin,

		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
		}),

		// Extract the CSS into a seperate file
		new ExtractTextPlugin('[contenthash:13].css'),

	].concat(base.plugins.htmlWebpackPlugin),
	devtool: false,
};

export default webpackBuildConfig;
