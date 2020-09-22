const exampleService = require('../services/example.service');
const constants = require('../constants');

module.exports = {

    findAll : async (req,res,next) => {
      try {
        let data =  await exampleService.findAllUsers();
        
        let response = constants.defaultResponse;
        response.statusCode = 200 ;
        response.status = constants.status.SUCCESS;
        response.data = data;
        response.message = constants.exampleServiceMessages.CREATED ; 
        return res.status(response.statusCode).send(response);
      } catch (error) {
        response.statusCode = 401 ;
        response.status = constants.status.FAILED;
        response.data = error;
        response.message = constants.exampleServiceMessages.CREATE_ERROR ; 
        return res.status(response.statusCode).send(response);
      }
        
    },

    add : async (req,res,next) => {
        try {
            let data =  await exampleService.adduser({...req.body});
            
            let response = constants.defaultResponse;
            response.statusCode = 200 ;
            response.status = constants.status.SUCCESS;
            response.data = data;
            response.message = constants.exampleServiceMessages.CREATED ; 
            return res.status(response.statusCode).send(response);
          } catch (error) {
            response.statusCode = 401 ;
            response.status = constants.status.FAILED;
            response.data = error;
            response.message = constants.exampleServiceMessages.CREATE_ERROR ; 
            return res.status(response.statusCode).send(response);
          }
    },

    update : async (req,res,next) => {
        res.send("Hello ")
    },

    delete : async (req,res,next) => {
        res.send("Hello ")
    },

}