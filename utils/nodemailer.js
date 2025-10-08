const nodemailer = require("nodemailer")
const { passwordlink } = require("../routes/indexroutes")
const errorhandler = require("./errorhandler")


exports.forgetpasswordlink = (req,res,next,passwordlink)=>{
     const transport = nodemailer.createTransport({
        service:"gmail",
        host:"smpt.gmail.com",
        port:465,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.EMAILPASSWORD
        }
        
     });
     const mailoption = {
        from:"careerLink private limited",
        to:req.body.email,
        subject:"password reset passwordlink",
        html:`<h1> click the passwordlink in blow to Reset password</h1>
        <a href="${passwordlink}"> password reset</a>`
     };
     transport.sendMail(mailoption,(err,info)=>{
        if(err) return next(new errorhandler(err,500))
       console.log(info)
      return res.status(info).json({
        message:"mail send sucessful",
        passwordlink
      })
     });

     
}