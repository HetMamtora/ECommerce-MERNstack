const ErrorHandler = require("../utils/errorhandler");

module.exports = (err,req,res,next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error"

    //Wrong MONGODB ID ERROR
    if(err.name==="CastError"){
        const message = `Resource not Found. Invalid: ${err.path}`;
        err = new ErrorHandler(message,400);
    }


    //MONGOOSE DUPLICATE KEY ERROR
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`
        err = new ErrorHandler(message,400);
    }

    //WRONG JWT TOKEN
    if(err.code === "JsonWebTokenError"){
        const message = `JSON web token is In-Valid, Try Again`
        err = new ErrorHandler(message,400);
    }

    //JWT EXPIRE ERROR
    if(err.code === "TokenExpiredError"){
        const message = `JSON web token is Expired , Try Again`
        err = new ErrorHandler(message,400);
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    })
}