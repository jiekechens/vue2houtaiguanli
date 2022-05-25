module.exports = {
    pages: {
        index: {
            entry: 'src/main.js'
        },
    },
    lintOnSave: false,
    devServer: {
        proxy: {
            'api': {
                target: 'http://127.0.0.1:4000',
                pathRewrite: { '^/api': '' }
            },
        }
    }
}