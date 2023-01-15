const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // the environment - development, production, none. tells webpack
  // to use its built-in optimizations accordingly. default is production
  mode: 'development',

  //the entry point
  entry: './index.js',
  output: {
    /** "path"
     * the folder path of the output file
     */
    path: path.resolve(__dirname, './dist'),
    /** "filename"
     * the name of the output file
     */
    filename: 'main.js',
    publicPath: '/',
  },
  /** "target"
   * setting "node" as target app (server side), and setting it as "web" is
   * for browser (client side). Default is "web"
   */
  target: 'web',
  devServer: {

    // Defualt port
    port: '9500',

    //This property tells Webpack what static file it should serve
    static: ['./public'],

    //opens the browser after server is successfully started
    open: true,

    //enabling and disabling HMR. takes "true", "false" and "only".
    //"only" is used if enable Hot Module Replacement without page
    //refresh as a fallback in case of build failures
    hot: false,

    //disable live reload on the browser. "hot" must be set to true for this to work
    liveReload: true,

    // Setting Host
    allowedHosts: ['all'],

    // Router Setting
    historyApiFallback: true,
  },
  resolve: {
    /** "extensions"
     * If multiple files share the same name but have different extensions, webpack will
     * resolve the one with the extension listed first in the array and skip the rest.
     * This is what enables users to leave off the extension when importing
     */
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    /** "rules"
     * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx'
     * file inside of a require()/import statement, use the babel-loader to transform it before you
     * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from
     * being searched"
     */
    rules: [
      {
        test: /\.(js|jsx)$/, // kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, // folder to be excluded
        use: ['babel-loader'] // loader which we are going to use
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
};
