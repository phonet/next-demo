// next.config.js

const antdLessLoader = require('next-antd-aza-less');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const fs = require('fs');
const path = require('path');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const lessToJS = require('less-vars-to-js');
/*module.exports = withCSS(
	withLess({
		cssModules: true,
		cssLoaderOptions: {
			importLoaders: 1,
			localIdentName: '[local]___[hash:base64:5]',
		}
	}),
);*/


if (typeof require !== 'undefined') {
	require.extensions['.less'] = file => {
	};
}

module.exports = withCSS(antdLessLoader({
	publicRuntimeConfig: {APP_ENV: process.env.APP_ENV},
	webpack: config => {
		config.plugins.push(
			//解决css加载顺序警告
			new FilterWarningsPlugin({
				exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
			})
		);
		return config;
	},
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[local]___[hash:base64:5]'
	},
	lessLoaderOptions: {
		javascriptEnabled: true,
		modifyVars: lessToJS(
			fs.readFileSync(path.resolve(__dirname, './util/antd.less'), 'utf8')
		)
	}
}));
