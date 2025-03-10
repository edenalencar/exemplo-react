#!/bin/bash
# Crie um arquivo setup.sh e torne-o executável com chmod +x setup.sh

# Crie a estrutura de pastas
mkdir -p src/components src/styles php dist

# Crie arquivos base
touch src/index.js src/index.html src/styles/main.scss
touch webpack.config.js

# Inicialize npm
npm init -y

# Instale dependências
npm install --save react react-dom bootstrap
npm install --save-dev webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader style-loader sass sass-loader mini-css-extract-plugin html-webpack-plugin

# Crie o webpack.config.js básico
cat > webpack.config.js << 'EOF'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.[contenthash].js',
    clean: true
  },
  // Restante da configuração...
}
EOF

# Adicione scripts ao package.json
npm pkg set scripts.start="webpack serve" 
npm pkg set scripts.build="webpack --mode=production"

echo "Estrutura de projeto criada com sucesso!"