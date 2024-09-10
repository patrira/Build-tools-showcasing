const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',  
    output: {
      filename: 'bundle.js',  
      path: path.resolve(__dirname, 'dist'),  
      clean: true,  
    },
    module: {
      rules: [
        {
          test: /\.js$/,  
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.s[ac]ss$/i,  
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css', 
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',  
        filename: 'index.html',  
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/data/tools.json', to: 'data/tools.json' },  
        ],
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      open: true,  
      compress: true,
      port: 3000,  
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    mode: isProduction ? 'production' : 'development',
  };
};
