const exampleModel = require('../models/example.model');
const dbHelper  = require('../helpers/dbHelper');
module.exports = {

    findAllUsers : async () => {
        try {
          let results =  await exampleModel.find({});
          
          return dbHelper.formatData(results);
        } catch (error) {
            return error;
        }
    },

    adduser: async ({name,age}) => {
        try {
           let result = await  new exampleModel({name,age}).save()
            return result;
        } catch (error) {
            return error;
        }
    },

    addBook: async () => {
        try {
           let result = await  new exampleModel({
                name:"Diluk angelo",
                age:24
            }).save()
            return result;
        } catch (error) {
            return error;
        }
    }
    
}