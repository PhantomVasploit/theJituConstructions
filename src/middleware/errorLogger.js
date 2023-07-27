const logger = require('../config/winston.config')

module.exports.errorLogger = (err, req, res, next)=>{
    if(err){
        logger.error(err.message, err)
        res.status(500).json({message: 'Internal server error', error: `${err.message}`})
        next()
    }
}