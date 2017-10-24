import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import cssnext from 'postcss-cssnext';
import websiteJson from './config/website.json';
import webpackEnv from './config/webpack';
import palette from './config/palette.json';

const webpackBaseConfig = {
	entry: (() => {
		const entryObj = {};

		for (const key in websiteJson.pages) {
			if ({}.hasOwnProperty.call(websiteJson.pages, key)) {
				entryObj[key] = path.join(__dirname, 'src', 'js', websiteJson.pages[key].entry);
			}
		}
		return entryObj;
	})(),
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[hash:13].js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: /src\/js/,
				use: 'babel-loader',
			},
			{
				test: /\.(jpg|png|gif)$/,
				include: [
					/src\/images/,
				],
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: '[hash:13].[ext]',
				},
			},
			{
				test: /\.svg$/,
				include: /src\/images/,
				use: [
					{
						loader: 'file-loader',
					},
					{
						loader: 'svgo-loader',
						options: {
							plugins: [
								{ removeTitle: true },
								{ collapseGroups: false },
							],
						},
					},
				],
			},
			{
				test: /\.pug$/,
				include: /src\/view/,
				use: 'pug-loader',
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader: 'file-loader',
				options: {
					name: '[hash:7].[ext]',
				},
			},
		],
		cssRule: {
			test: /\.css$/,
			include: /src\/css/,
			use: {
				css: 'css-loader',
				postcss: 'postcss-loader',
			},
		},
	},
	plugins: {

		// webpack environment variables
		webpackEnvironment: new webpack.DefinePlugin({
			'process.env': webpackEnv,
		}),

		htmlWebpackPlugin: (() => {
			const htmlArr = [];

			/**
			 * return a html object
			 */
			const htmlWebpackObj = (page, language) => (
				new HtmlWebpackPlugin({
					template: `src/view/${page}.pug`,
					inject: 'body',
					filename: `${page}.html`,
					favicon: 'src/images/favico.png',
					minify: {
						collapseBooleanAttributes: true,
						collapseWhitespace: true,
						minifyCSS: true,
						minifyJS: true,
						quoteCharacter: '\'',
						removeComments: true,
						removeEmptyAttributes: true,
						removeScriptTypeAttributes: true,
						removeStyleLinkTypeAttributes: true,
					},
					chunks: ['bundle', page],
				})
			);

			/**
			 * generate .html file of each page
			 */
			Object.keys(websiteJson.pages).forEach((page) => {
				htmlArr.push(htmlWebpackObj(page));
			});

			return htmlArr;
		})(),

		loaderOptionsPlugin: new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
					cssnext({
						features: {
							customProperties: {
								variables: palette,
							},
						},
					}),
				],
			}
		}),

	},
};

export default webpackBaseConfig;
