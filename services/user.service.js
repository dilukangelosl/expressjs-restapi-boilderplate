const model = require("../models/user.model");
const dbHelper = require("../helpers/dbHelper");
const constants = require("../constants");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  adduser: async ({ name, email, password }) => {
    try {
      //check if email exsists
      let user = await model.findOne({ email: email });
      
      if (user) {
        //user already exsists
        //throw error
         throw new Error(constants.authenticationMessages.USER_EXSISTS);
      }
      //create user
      let hashedpassword = await bcrypt.hash(password, 10);
      let data = await new model({
        name,
        email,
        password: hashedpassword,
      }).save();

      return dbHelper.formatData(data);
    } catch (error) {
      console.log("Something went wrong: User:Service: register", error);
      throw new Error(error);
    }
  },

  login: async ({ email, password }) => {
    try {
        const user = await model.findOne({email});
      if (!user) {
        //user already exsists
        //throw error
        throw new Error(constants.authenticationMessages.EMAIL_INCORRECT);
       
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw new Error(constants.authenticationMessages.PASSWORD_INCORRECT);
      }

     
      //create token

      let token = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWTSECRET || "mysecret",
        { expiresIn: "1d" }
      );

      return { token };
    } catch (error) {
      console.log("Something went wrong: User:Service: Login", error);
      throw new Error(error);
    }
  },
};
