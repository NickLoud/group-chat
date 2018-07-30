let path = require('path');

module.exports = {
    entry: ["./client.js"],
    output:{
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                //js-file loader
                test: /\.js?$/,
                exclude: [/(node_modules)/,/(index\.js$)/],
                loader: "babel-loader",
                options:{
                    presets:["env",]
                }
            },
            //css-file loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }

        ]
    },
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: "source-map",

};