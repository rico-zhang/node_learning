const path = require('path');
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost:9527"
            }
        }
    },
    outputDir: path.resolve(__dirname, '../public')
}