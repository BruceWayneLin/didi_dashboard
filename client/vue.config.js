const path = require('path')
const webpack = require('webpack')

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    publicPath: process.env.NODE_ENV = '',
    css: {
        sourceMap: true
    },
    configureWebpack: {
        module:  {
            noParse: /(mapbox-gl)\.js$/
        },
        resolve: {
        extensions: ['.js'],
        alias: {
            'jquery': 'jquery/dist/jquery.js',
        }
        },
        plugins: [
            // new BundleAnalyzerPlugin(),
            new webpack.ProvidePlugin({
                '$': 'jquery',
                jQuery: 'jquery',
                Popper: ['popper.js', 'default'],
                'Util': "exports-loader?Util!bootstrap/js/dist/util"
            }),
        ],
        optimization: {
            splitChunks: {
              minSize: 10000,
              maxSize: 250000
            }
        }
    }
}