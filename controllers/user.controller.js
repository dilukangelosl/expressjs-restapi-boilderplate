const exampleService = require('../services/user.service');
const constants = require('../constants');


module.exports = {

    resgister: async (req,res,next) => {
        let response = constants.defaultResponse;
        try {
            let data =  await exampleService.adduser({...req.body});
            
            
            response.statusCode = 200 ;
            response.status = constants.status.SUCCESS;
            response.data = data;
            response.message = constants.authenticationMessages.USER_CREATED ; 
          
          } catch (error) {
             console.log(error);
            response.statusCode = 401 ;
            response.status = constants.status.FAILED;
            response.data = error;
            response.message = error.message;
            
          }
          return res.status(response.statusCode).send(response);
    },

    login: async (req,res,next) => {
        let response = constants.defaultResponse;
        try {
            let data =  await exampleService.login({...req.body});
            
            
            response.statusCode = 200 ;
            response.status = constants.status.SUCCESS;
            response.data = data;
            response.message = constants.authenticationMessages.LOGGED_IN ; 
           
          } catch (error) {
            response.statusCode = 401 ;
            response.status = constants.status.FAILED;
            response.data = error;
            response.message = error.message;
           
          }
          return res.status(response.statusCode).send(response);
    }
}



