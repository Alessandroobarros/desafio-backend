const pino = require('pino')

const logger = pino({enable: true})

module.exports = { logger }