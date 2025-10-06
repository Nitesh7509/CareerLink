const jwt =require("jsonwebtoken");
const errorhandler=require("../utils/errorhandler");
const { catchAsync } = require("./catchasync");



exports.isAuthintication = catchAsync(async(req,res,next)=>{
  const {token} = req.cookies;
  if(!token){
    return next(new errorhandler("please login " ,400))
  }
  const {id} =jwt.verify(token,process.env.WEBTOKEN_SECRET);
  req.id =id;

  next()
})