const jwt = require('jsonwebtoken');
const constants  = require('../constants');

module.exports = {


    isAuthenticated: (req,res,next) => {
        let response  = {...constants.defaultResponse};
        try {

            if(!req.headers.authorization){
                throw new Error(constants.authenticationMessages.TOKEN_MISSING)
            }

            const token = req.headers.authorization.split('Bearer')[1].trim();
            const decoded = jwt.decode(token, process.env.JWTSECRET || 'jwtsecret');
            if(decoded == null) {
                throw new Error(constants.authenticationMessages.TOKEN_MISSING);
            }
            
            req.jwt = decoded ;
            next();
            
        } catch (error) {
            console.log(error)
            response.message = error.message;
            response.status = constants.status.FAILED;
            response.statusCode = 401;
            return res.status(response.statusCode).send(response);
        }

        
    }

}