module.exports = {
   entry: {
      main: "./src/js/main.js"
   },

   module: {
      loaders: [
         { test: /\.styl$/, loader: 'style!css!autoprefixer!stylus' }
      ],
   },

   output: {
      path: __dirname+"/assets",
      publicPath: "/assets/",
      filename: "[name].bundle.js",
      chunkFilename: "[id].bundle.js"
   }
}
