const path=require('path')
module.exports={
    //Where we write our ES6/ES7 code
    entry:{
        app:'./src/app.js'
    },
    //Our compile code in ES5 
    //__dirname means current directory
    //build is a folder name
    //app.bundle.js is file in side build folder that contain compiled code
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'app.bundle.js'
    },
    //Babel configuration
    module: {
        rules: [
          {
            //compile js files only
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
}