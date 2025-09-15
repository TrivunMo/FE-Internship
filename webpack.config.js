const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');
const { url } = require('inspector');


module.exports = {
    mode: 'development',
    entry: [
        './src/scss/style.scss',
        './src/js/script.js',
    ],
    output: {
        filename: 'js/script.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192, // Fajlovi manji od 8KB se enkodiraju u Base64
                            fallback: 'file-loader', // Fajlovi veći od 8KB koriste file-loader
                            name: '[name].[hash].[ext]', // Kreira jedinstvene nazive za fajlove
                            outputPath: 'assets/images/',  // Gde će slike biti sačuvane
                        },
                    },
                ],
            },
            {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                    'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                'autoprefixer',
                            ]
                        }
                    }
                },

                
                'sass-loader',
            ]
            
        },

     
    ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
    ],


}