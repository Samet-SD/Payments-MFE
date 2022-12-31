const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const prodConfig = {
    mode: 'production', 
    output: {
        filename: '[name].[contenthash].js'
    },
   plugins: [
    new ModuleFederationPlugin({
        name: 'payments',
        filename: 'remoteEntry.js',
        exposes: {
            './Payments': '/src/bootstrap'
        },
        shared: packageJson.dependencies
    })

   ]


};

module.exports = merge(commonConfig, prodConfig);
