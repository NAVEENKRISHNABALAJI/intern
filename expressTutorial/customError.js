class CustomError extends Error{
    constructor(message, statusCode){
        super(message)//Error class
        this.statusCode= statusCode
        this.status= statusCode>=400 && statusCode<500?"Fail":"Error"
        this.isOperational= true
        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports= CustomError