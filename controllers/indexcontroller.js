const { catchAsync } = require("../middlewares/catchasync")
const students = require("../models/studentmodel");
const errorhandler = require("../utils/errorhandler");


exports.homepage = catchAsync(async (req, res, next) => {
  console.log("heelo")
  res.json({ message: "heelo" });
})



exports.StudentSignUp = catchAsync(async (req, res, next) => {
  const student = await new students(req.body).save();
  res.status(200).json(student);
})


exports.StudentSignIn = catchAsync(async (req, res, next) => {
  const student = await students.findOne({ email: req.body.email }).select("+password").exec();

  if(!student) return next(new errorhandler("user not found",404))
 const isMatched = student.matchpassword(req.body.password)
  if(!isMatched) return next(new errorhandler("password is wrong",402))
  res.json(student)
})



exports.StudentSignOut = catchAsync(async (req, res, next) => {

})