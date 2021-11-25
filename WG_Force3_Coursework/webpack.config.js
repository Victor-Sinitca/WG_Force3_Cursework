const {resolve} = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const src = resolve(__dirname, 'src')

module.exports = {
  entry: {
    index: resolve(src, 'pages/main', 'main.ts'),
    item: resolve(src, 'pages/item', 'item.ts'),
  },
  // entry: resolve(src, 'pages/main', 'main.ts'),
  output: {
    filename: '[name].js',
    clean: true
  },
  stats: 'errors-warnings',

  resolve: {
    alias: {
      '@atoms': resolve(src, 'components/atoms/'),
      '@molecules': resolve(src, 'components/molecules/'),
      '@organisms': resolve(src, 'components/organisms/'),
      '@sections': resolve(src, 'components/sections/'),
      '@pages': resolve(src, 'pages/'),

      '@images': resolve(src, 'assets/images'),
      '@countries': resolve(src, 'assets/images/country'),
      '@vehicle-type': resolve(src, 'assets/images/vehicleType'),

      '@scss-utils': resolve(src, 'scss/utils'),
      '@scss-vars': resolve(src, 'scss/variables'),
    }
  },

  devServer: {
    open: true,
    port: 9000,
    hot: true,
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: resolve(src, 'pages/main', 'main.html'),
      minify: true
    }),
    new HTMLWebpackPlugin({
      filename: 'item.html',
      template: resolve(src, 'pages/item', 'item.html'),
      minify: true
    }),
    new MiniCSSExtractPlugin({
      filename: '[name].css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        // loader: 'esbuild-loader',
        // options: {
        //   loader: 'ts',
        //   target: 'esnext'
        // },
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(c|sc)ss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|jpg|png|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      },
      {
        test: /\.(woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      }
    ]
  }



}