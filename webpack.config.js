const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config/');
const IS_ENV = process.env.NODE_ENV == 'production';


var plugins = [];
if (IS_ENV) { //生产环境
    plugins.push(new webpack.DefinePlugin({
        'process.env': { //设置成生产环境
            NODE_ENV: '"production"'
        }
    }))
    plugins.push(new webpack.optimize.UglifyJsPlugin({ //压缩代码
        compress: {
            warnings: false
        }
    }))
}



module.exports = {
    entry:{
        main: ['webpack-dev-server/client','./src/main.js'],    // 前面一定要这样写，要不然不能热更新
    },

    output: {
        publicPath: '/elink-admin/', //服务器的路径 publicPath: config.publicPath,
        path: path.resolve(__dirname + '/elink-admin'), //编译到app目录 path: path.resolve(__dirname + config.publicPath)
        filename: '[name].js?[hash]' //编译后的文件名
    },
    module: {
        loaders: [
            {
                test: /\.js(x)*$/,
                exclude: /^node_modules$/,
                loader: 'babel'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.css/,
                exclude: /^node_modules$/,
                loader: `style-loader!css-loader!autoprefixer-loader?{ browsers: ['last 100 versions'] }!`
            },
            {
                test: /\.less/,
                exclude: /^node_modules$/,
                loader: `style-loader!css-loader!autoprefixer-loader?{ browsers: ['last 100 versions'] }!less-loader`
            },
            {
                test: /\.scss$/,
                exclude: /^node_modules$/,
                loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap'

            },
            {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
                loader: 'url?limit=2000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
        ,
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less/,
                use:['style-loader','css-loader','autoprefixer-loader']
            },
            {
                test: /\.js(x)$/,
                use:['babel']
            },
            {
                test: /\.vue$/,
                use:['vue','babel']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "htmllint-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use:['url?limit=2000&name=[name].[ext]']
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                use: ['file-loader']
            }
        ]

    },
    plugins:[
        // ...plugins,
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        }),
        new HtmlWebpackPlugin({                          //根据模板插入css/js等生成最终HTML
            filename: './index.html',                            //生成的html存放路径，相对于 path
            template: './src/template/index.html',              //html模板路径
        }),
        new webpack.HotModuleReplacementPlugin(),        // 启用 HMR
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "windows.jQuery":"jquery"
        }),
    ],
    resolve: {
        extensions: ['', '.js', '.vue', '.jsx'], //后缀名自动补全
        alias: {
            vue: 'vue/dist/vue.js', //webpack打包时，需要设置别名
            store: path.resolve('src/store/'), //常用工具方法
        }
    },
    vue: {
        postcss: [
            require('autoprefixer')({
                browsers: ['last 100 versions']
            })
        ]
    },
    devtool: '#eval-source-map',
    devServer: {                                             //  如果你通过 Node.js API 来使用 dev-server， devServer 中的选项将被忽略。将选项作为第二个参数传入： new WebpackDevServer(compiler, {...})
        hot: true,                                              //启用 webpack 的模块热替换特性：
        // contentBase:,                                         //告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要 config.publicPath ,  默认目录是webpack.config.js所在位置   这个默认就行了,因为publicPath: '/elink-admin/   已经指定了位置了.
        open: true,                                             //When open is enabled, the dev server will open the browser.
        // historyApiFallback: true,
        port: 4006,                                             //指定要监听请求的端口号：
        host: '192.168.0.186',                                     //如果你希望服务器外部可访问，指定如下：
        inline: true,                                          //默认情况下，应用程序启用内联模式(inline mode)。这意味着一段处理实时重载的脚本被插入到你的包(bundle)中，也可以使用 iframe 模式，它在通知栏下面使用 <iframe> 标签，包含了关于构建的消息。切换到 iframe 模式：inline:false
        stats: "errors-only",
        proxy: { //代理服务器
            '/elink-admin/sys/*': {
                target: config.target,

            },
            '/elink-admin/elink/*': {
                target: config.target,

            }
        }

    }

};















