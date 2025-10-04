exports.generatedError =(err,req,res,next)=>{
 const statusCode=err.statusCode||500;

 if(err.name==="MongoServerError"||err.message==="E11000 duplicate key error collection"){
   res.status(statusCode).json({
      message:"email is already used",
    name:err.name,
   })

 }
 res.status(statusCode).json({
    message:err.message,
    name:err.name,
    // stack:err.stack
 })
}