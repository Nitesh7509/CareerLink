const { catchAsync } = require("../middlewares/catchasync");
const students = require("../models/studentmodel");
const errorhandler = require("../utils/errorhandler");
const { forgetpasswordlink } = require("../utils/nodemailer");
const { sendtoken } = require("../utils/sendtoken");

exports.homepage = catchAsync(async (req, res, next) => {
  res.json({ message: "heelo" });
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

exports.profilepage = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
  res.json(student);
});


exports.profileUpdate = catchAsync(async (req, res, next) => {
   const student = await students.findByIdAndUpdate(req.id ,req.body).exec();
     if (!student) return next(new errorhandler(err, 404));
   res.status(201).json({
      message:"user profile  update sucessfully"

   })
});
exports.profileavatar = catchAsync(async (req, res, next) => {
    const files =req.files
   res.status(201).json({
      message:"user profile  update sucessfully",
      files


   })
});

exports.StudentSignOut = catchAsync(async (req, res, next) => {
  res.clearCookie("token");
  res.json({ message: "you`re  now signout" });
});

exports.forgetpassowrd = catchAsync(async (req, res, next) => {
  const student = await students.findOne({ email: req.body.email }).exec();

  if (!student) return next(new errorhandler(" user not found ", 404));

  const passwordlink = `${req.protocol}/${req.get("host")}/student/forgetpassword/${
    student._id
  }`;
 
  forgetpasswordlink(req, res, next, passwordlink);
    student.linkexpiretoken = "1";
    await  student.save()
  res.json({ student, passwordlink });
});

exports.forgetpassowrdlink = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.params.id).exec();

  if (!student) return next(new errorhandler(" user not found ", 404));
  if (student.linkexpiretoken == "1") {
    student.linkexpiretoken = "0";
    student.password = req.body.password;
    await student.save();

   
  } else {
   return next(new errorhandler(" passwordlink expired ", 500));
  }
   res.status(200).json({
    message: "password change sucessfully",
  });


});

exports.resetpasswordlink = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id).exec();

  if (!student) {
    return next(new errorhandler("User not found", 404));
  }

  student.password = req.body.password;
  await student.save();

  return res.status(200).json({
    message: "Password changed successfully",
  });
});




