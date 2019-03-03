'use strict';

let path = require('path');
let conf = {
	 entry: "./home", 
  	output: {
  		path: path.resolve(__dirname, './js'),
    	filename: "build.js",
    	publicPath: 'js/'
    },
    devServer:{
    	overlay: true
    },
    module:{
    	rules:[
    		{
    			test: /\.js$/,
    			loader: 'babel-loader',
                // exclude: '/node_modules/'
    		}
    		// {
    		// 	test: /\.css$/
    		// },
    		// {
    		// 	test: /\.img$/
    		// }
    	]
    }

};

module.exports = (env, options) => {
    conf.devtool = options.mode === "production" ? 
                    false :
                    "cheap-module-eval-source-map";

    return conf;
};