const PATH = require('path')

function resolve(dir) {
    return PATH.join(__dirname, './', dir)
}

module.exports = {
    configureWebpack : {
        resolve : {
            alias : {
                '@' : resolve('src'),
                'scss_vars' : '@/styles/vars.scss'
            }
        }
    }
}

