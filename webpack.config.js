const dev = require('./webpack.dev.js')
const build = require('./webpack.build.js')

let config
if (process.env.NODE_ENV === 'production') {
    config = build
} else {
    config = dev
}

module.exports = config
