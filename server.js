const path = require('path')
const Webpack = require("webpack");
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require("./webpack.config");
const config = require('./config/');

var compiler = Webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {

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

        }
    }
});

server.listen(4006, (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('http://localhost:4006' + config.publicPath)
});