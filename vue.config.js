// 

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete("svg");
    },
    configureWebpack: {
        module: {
            rules: [{
                test: /\.svg$/,
                loader: 'vue-svg-loader',
            }, ],
        }
    },
    devServer: {
        proxy: 'http://localhost:3000'
    }
};