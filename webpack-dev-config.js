const path = require('path');


var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: path.join(__dirname, './src/index.js'),
        // index: path.join(__dirname, './index.html')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'src/main-[hash].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                // plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
                }
            }, {
                test:/\.scss$/,
                loaders:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loaders: ['url-loader?limit=8192&name=src/images/[hash:8].[name].[ext]']
            },
            // {
            //     test: /\.png$/,
            //     loaders: ["file-loader?name=src/images/[hash:8].[name].[ext]"]
            // },
            {
    　　　　　　test: /\.html$/,
    　　　　　　loaders: ['html-withimg-loader']
        　　}
        ]
    },
    //插件数组
    plugins:[
    //初始化插件,传递模板参数
    new htmlWebpackPlugin({
            //模板为同级目录下的index.html，为何不用写路径，是因为默认上下文问webpack.config.js所在的文件夹
                template:'index.html'
        })
    ]
}