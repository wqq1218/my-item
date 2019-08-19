const path=require('path')

function resolve(dir) {
    return path.resolve(__dirname,dir)
}

module.exports= {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'], // 自添加的文件扩展名
            alias: { // 模块路径别名
                // 'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
                'components': resolve('src/components'),
                'pages': resolve('src/pages'),
            }
        }
    }
}
