const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('./package.json');

module.exports = {
  name: 'SushiMicroFrontendApp',
  entry: './src/index.ts',
  mode: 'production',
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new ModuleFederationPlugin({
      name: 'SushiMicroFrontendApp',
      filename: 'remoteEntry.js',
      remotes: {
        SushiMicroFrontendUsers:
          'SushiMicroFrontendUsers@https://sushi-microfrontend-users.s3.eu-west-3.amazonaws.com/remoteEntry.js',
        SushiMicroFrontendAlbums:
          'SushiMicroFrontendAlbums@https://sushi-microfrontend-albums.s3.eu-west-3.amazonaws.com/remoteEntry.js',
        SushiMicroFrontendPhotos:
          'SushiMicroFrontendPhotos@https://sushi-microfrontend-photos.s3.eu-west-3.amazonaws.com/remoteEntry.js'
      },
      exposes: {},
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom']
        },
        'react-error-boundary': {
          singleton: true,
          requiredVersion: dependencies['react-error-boundary']
        }
      }
    })
  ]
};
