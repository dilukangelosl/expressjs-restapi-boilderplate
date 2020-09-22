const Joi = require('@hapi/joi');


module.exports = {

    createSchema: Joi.object().keys({
        name:Joi.string(),
        email:Joi.string().email().required(),
        password: Joi.string().min(6).max(16).required()
    }),

    loginSchema: Joi.object().keys({
        
        email:Joi.string().email().required(),
        password: Joi.string().required()
    }),

    updateSchema: Joi.object().keys({
        name:Joi.string(),
        age: Joi.number().integer()
    }),

}




