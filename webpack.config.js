var path = require('path');
var webpack = require('webpack');

module.exports = {  
    entry: './app/BackboneApp.ts',
    output: {
      //filename: './app/BackboneApp.js'
      path: path.resolve(__dirname, 'app'),
      filename: 'BackboneApp.js',
      publicPath: '/app'
    },
    resolve: {
      extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins:[
        
                //inject all the files above into this file
                /*new HtmlWebPackPlugin({
                    template: './src/index.html'
                }),*/
                new webpack.ProvidePlugin({
                    jQuery: 'jquery',
                        $: 'jquery',
                        jquery: 'jquery'
                })
        
            ],
    module: {
      loaders: [
         { test: /\.ts$/, loader: 'ts-loader' }
        ,{ test: require.resolve('jquery'), loader: 'expose-loader?jQuery' }
      ]
    }
  }
  