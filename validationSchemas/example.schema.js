const Joi = require('@hapi/joi');


module.exports = {

    createSchema: Joi.object().keys({
        name:Joi.string().min(5).max(16).required(),
        age: Joi.number().integer().required()
    }),

    updateSchema: Joi.object().keys({
        name:Joi.string(),
        age: Joi.number().integer()
    }),

}




