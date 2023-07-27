const winston = require('winston')

const logger = winston.createLogger({
    level: 'verbose',
    format: winston.format.json(),
    defaultMeta: {service: 'The-Jitu-Construction-Api-Service'},
    transports: [
        new winston.transports.File({filename: 'errors.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'}),
    ]
})

module.exports = logger;