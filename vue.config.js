module.exports = {
    configureWebpack: {
        module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
              },
              {
                test: /\.scss$/,
                include: /(node_modules)/,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
                ]
              }
            ]
        }
    },
}
