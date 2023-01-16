const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback:{
            index: '/index.html'
        }
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'payments',
            filename: 'remoteEntry.js',
            exposes:{
                './Payments': './src/bootstrap'
            },
            //shared: packageJson.dependencies,
            shared: {
                react: {
                    singleton: true,
                },
                
            } 
        }),
        new HtmlWebpackPlugin(
            {
                template: './public/index.html'
            }
        )
    ]
}

module.exports = merge(commonConfig, devConfig);