const { catchAsync } = require("../middlewares/catchasync");
const students = require("../models/studentmodel");
const errorhandler = require("../utils/errorhandler");
const { sendtoken } = require("../utils/sendtoken");

exports.homepage = catchAsync(async (req, res, next) => {
  
  res.json({ message: "heelo" });
});

exports.profilepage = catchAsync(async (req, res, next) => {
  const student= await students.findById(req.id);
  res.json(student)
  
});

exports.StudentSignUp = catchAsync(async (req, res, next) => {
  const student = await new students(req.body).save();
  sendtoken(student, 201, res);
});

exports.StudentSignIn = catchAsync(async (req, res, next) => {
  const student = await students
    .findOne({ email: req.body.email })
    .select("+password")
    .exec();

  if (!student) return next(new errorhandler("user not found", 404));
  const isMatched = student.matchpassword(req.body.password);
  if (!isMatched) return next(new errorhandler("password is wrong", 402));
  sendtoken(student, 200, res);
});

exports.StudentSignOut = catchAsync(async (req, res, next) => {
  res.clearCookie("token");
  res.json({ message: "you`re  now signout" });
});

exports.forgetpassowrd= catchAsync(async (req, res, next) => {
  
  res.json({ message: "heelo" });
});
