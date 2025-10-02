const { catchAsync } = require("../middlewares/catchasync")

exports.homepage = catchAsync(  async (req ,res,next)=>{
console.log("heelo")
res.json({message:"heelo"})
})