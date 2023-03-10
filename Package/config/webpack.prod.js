const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const prodConfig = {
    mode: 'production', 
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/payments/latest/'
    },
   plugins: [
    new ModuleFederationPlugin({
        name: 'payments',
        filename: 'remoteEntry.js',
        exposes: {
            './Payments': '/src/bootstrap'
        },
        //shared: packageJson.dependencies
        shared: {
            react: {
                singleton: true,
            },
            
        }
    })

   ]


};

module.exports = merge(commonConfig, prodConfig);
