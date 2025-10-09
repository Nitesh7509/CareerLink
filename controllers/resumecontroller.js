const { catchAsync } = require("../middlewares/catchasync");
const students = require("../models/studentmodel");

exports.resumehomepage = catchAsync(async (req, res, next) => {
  const {resume} = await students.findById(req.id)
  res.json({ resume});
});