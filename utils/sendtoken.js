exports.sendtoken =function(student,statusCode,res){
    const token =student.jwtwebtoken();
   const options ={
    expire:new Date(
        Date.now()+process.env.EXPIRETIME *24*60*60*1000
    ),
    httpOnly:true
   }

   res.status(statusCode).cookie("token",token,options).json({sucess:true , id:student._id,token})
}