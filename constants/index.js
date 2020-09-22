module.exports = {

    status:{
        SUCCESS:"Success",
        FAILED:"Failed",
        SERVER_ERROR:"Server error",
        DATABASE_ERROR:"Database Error"
    },

    authenticationMessages:{
      USER_EXSISTS:"Sorry the email is already in use",
      USER_CREATED:"Successfully User regisstered",
      USER_CREATE_ERROR:"Something went wrong by registering the user",
      EMAIL_INCORRECT:"Email Incorrect",
      PASSWORD_INCORRECT:"Incorrect Password, Please try again",
      LOGGED_IN:"Login Success",
      LOGGING_FAILED:"Login Failed",
      TOKEN_MISSING:"You are not Authorized or Missing token"
    },
    defaultResponse: {
        status: "success",
        statusCode:200,
        data: {
          
        },
        message: null /* Or optional success message */
      },

      validationMessages:{
        INVALID_FIELDS:"Invalid Fields",
        TOKEN_MISSING:"You are not Authorized or Missing token"
      },


      exampleServiceMessages : {
          CREATED: "Successfully Created",
          UPDATED:"Successfully Updated",
          DELETED:"Successfully Deleted",
          GETALL:"Succesfully Retrieved Data",
          CREATE_ERROR:"Oops, Something went wrong adding Data, please try again later"
      }


}