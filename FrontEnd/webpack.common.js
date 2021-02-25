//https://tania.dev/how-to-use-webpack/
//https://github.com/taniarascia/webpack-boilerplate
const paths = require('./paths.js')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/app.jsx'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // Customize the webpack build process
  plugins: [
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Material Entity',
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
    }),
  ],

  // Determine how modules within the project are treated
  module: {
   
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader']},

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
          {loader: 'postcss-loader', options: {sourceMap: true}}
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      // Images: Copy image files to build folder
      {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

      // Fonts and SVGs: Inline files
      {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},
    ],
  },
}