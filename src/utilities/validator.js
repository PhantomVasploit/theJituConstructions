const Joi = require('joi')

module.exports.registerSchema = Joi.object({
    firstName: Joi.string().required().min(3).max(20),
    lastName: Joi.string().required().min(3).max(20),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

module.exports.loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})