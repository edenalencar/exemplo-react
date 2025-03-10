const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.[contenthash].js',
    clean: true // Limpa o diretório de saída antes de cada build
  },
  module: {
    rules: [
      // Regra para processar arquivos JS/JSX
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
      // Regra para processar arquivos CSS
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      // Regra para processar arquivos SCSS/SASS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // Regra para processar imagens
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]'
        }
      },
      // Regra para processar fontes
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]'
        }
      }
    ]
  },
  plugins: [
    // Plugin para extrair CSS em arquivos separados
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    // Plugin para gerar HTML que inclui os arquivos compilados
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'] // Permite importar módulos sem extensões
  },
  // Configuração do servidor de desenvolvimento
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 3000,
    hot: true, // Habilita Hot Module Replacement
    open: true, // Abre o navegador automaticamente
    // Configuração para trabalhar com PHP (proxy para um servidor PHP)
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Seu servidor PHP
        pathRewrite: { '^/api': '' }
      }
    }
  },
  // Gera mapas de origem para facilitar o debugging
  devtool: 'source-map'
};