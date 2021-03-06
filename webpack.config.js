/**
 * Created by Administrator on 2017/10/12.
 */
if(process.env.NODE_ENV=='production'){
    require("./npm-cmd/build-before");
}

module.exports={
    entry:require("./webpack-config/entryAttrDll.config"),
    output:require("./webpack-config/baseConfig/output.config"),
    module:require("./webpack-config/module.config.dev"),
    resolve:require('./webpack-config/baseConfig/resolve.config'),
    plugins:require("./webpack-config/webpack.plugs.dev"),
    devServer: process.env.NODE_ENV=="server"?{}: require("./webpack-config/baseConfig/dev.server"),
    //devtool:'cheap-module-source-map',
};