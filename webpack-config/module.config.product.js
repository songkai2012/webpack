const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseModuleConfig = require("./baseConfig/module.config");

baseModuleConfig.rules.push(
    {
        test:/\.less/,
        use:ExtractTextPlugin.extract([
            {
                loader:'css-loader'
            },
            {
                loader:'less-loader'
            }
        ])
    }
);

module.exports = baseModuleConfig;
/*
module.exports = {
    rules: [
  /!*      {
            test: /\.js$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            //include: dirVars.srcRootDir,
            exclude: /bootstrap/,
           /!* options: {
                formatter: eslintFormatter,
                fix: true,
            }*!/
        },*!/
        {
            test: /\.js$/,
            //include: dirVars.srcRootDir,
            loader: 'babel-loader',
            options: {
                presets: [['env']],
                //cacheDirectory: true,
               // plugins: ['transform-runtime'],
            },
        },
        {
            test: /\.html$/,
           // include: dirVars.srcRootDir,
            loader: 'html-loader',
        },
        {
            // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
            // 如下配置，将小于8192byte的图片转成base64码
            test: /\.(png|jpg|gif)$/,
            //include: dirVars.srcRootDir,
            // loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: './static/img/[hash].[ext]',
            },
        },
        {
            // 专供bootstrap方案使用的，忽略bootstrap自带的字体文件
            test: /\.(woff|woff2|svg|eot|ttf)$/,
            include: /glyphicons/,
            loader: 'null-loader',
        },
        {
            // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            //include: dirVars.srcRootDir,
            // exclude: /glyphicons/,
            // loader: 'file-loader?name=static/fonts/[name].[ext]',
            loader: 'file-loader',
            options: {
                name: 'static/fonts/[name].[hash].[ext]',
            },
        },
        {
            test: /\.less$/,
            //include: dirVars.srcRootDir,
            use: ExtractTextPlugin.extract([
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        '-autoprefixer': true,
                    },
                },
           /!*     {
                    loader: 'postcss-loader',
                },*!/
                {
                    loader: 'less-loader',
                },
            ]),
        },
        {
            test: /\.css$/,
            exclude: /node_modules|bootstrap/,
            // loader: ExtractTextPlugin.extract('css?minimize&-autoprefixer!postcss'),
            use: ExtractTextPlugin.extract([
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        '-autoprefixer': true,
                    },
                },
               /!* {
                    loader: 'postcss-loader',
                },*!/
            ]),
        }

    ],

};*/
