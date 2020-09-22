const Joi = require('@hapi/joi');
const contants = require('../constants')

const validateObjectSchema =  (data,schema) => {
    const result = Joi.validate(data,schema,{convert:false});
    if(result.error){
        const errorDetails = result.error.details.map(value => {
            return {
                error:value.message,
                path: value.path
            }
        })
        return errorDetails;
    }
  
    return null;

    
}
module.exports = {

    validateBody: (schema) => {
        return (req,res,next) => {
            const response = {...contants.defaultResponse};
           const error=  validateObjectSchema(req.body, schema);
           if(error){
            response.data = error;
            response.status = contants.status.FAILED
            response.statusCode = 400 ;
            response.message = contants.validationMessages.INVALID_FIELDS
            return res.status(response.statusCode).send(response);
           }
           //validation pass
           return next();
        }
    }
    ,
    validateParams: (schema) => {
        return (req,res,next) => {
            const response = {...contants.defaultResponse};
           const error=  validateObjectSchema(req.query, schema);
           if(error){
            response.data = error;
            response.status = contants.status.FAILED
            response.statusCode = 400 ;
            response.message = contants.validationMessages.INVALID_FIELDS
            return res.status(response.statusCode).send(response);
           }
           //validation pass
           return next();
        }
    
    }
}