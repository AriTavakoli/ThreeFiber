const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {

    watchOptions: {
        poll: true,
        ignored: /node_modules/
      },
    entry: path.resolve(__dirname, '../src/script.js'),
    output: {
        hashFunction: 'xxhash64',
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },

    resolve : {
        alias : {
            '@static': path.resolve(__dirname, '../static'),
            '@src': path.resolve(__dirname, '../src'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@styles': path.resolve(__dirname, '../src/styles'),
            '@images': path.resolve(__dirname, '../src/images'),
            '@fonts': path.resolve(__dirname, '../src/fonts'),
            '@shaders': path.resolve(__dirname, '../src/shaders'),
            '@models': path.resolve(__dirname, '../src/models'),
            '@utils': path.resolve(__dirname, '../src/utils'),
            '@hooks': path.resolve(__dirname, '../src/hooks'),


        }
    },


    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true
        }),
        new MiniCSSExtractPlugin()
    ],
    module:
    {
        rules:
            [
                // HTML
                {
                    test: /\.(html)$/,
                    use:
                        [
                            'html-loader'
                        ]
                },

                // JS
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']

                        }
                    }

                },

                // CSS
                {
                    test: /\.css$/,
                    use:
                        [
                            MiniCSSExtractPlugin.loader,
                            'css-loader'
                        ]
                },

                // Images
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    type: 'asset/resource',
                    generator:
                    {
                        filename: 'assets/images/[hash][ext]'
                    }
                },

                // Fonts
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    type: 'asset/resource',
                    generator:
                    {
                        filename: 'assets/fonts/[hash][ext]'
                    }
                },

                // Shaders
                {
                    test: /\.(glsl|vs|fs|vert|frag)$/,
                    type: 'asset/source',
                    generator:
                    {
                        filename: 'assets/images/[hash][ext]'
                    }
                }
            ]
    }
}
