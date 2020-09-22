module.exports = {


    checkLoginToken: (req,res,next) => {
            if(req.query.password == "dilukangelo"){
                return next();
            }
            return res.send("Not Authenticated");
    }


}