const { v4: uuidv4 } = require('uuid');
const { catchAsync } = require('../middlewares/catchasync');
const students = require('../models/studentmodel');

exports.resumehomepage = catchAsync(async (req, res, next) => {
  const { resume } = await students.findById(req.id);
  res.json({ resume });
});



//education 
exports.resumeeducation = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
  student.resume.education.push({ ...req.body, id: uuidv4() });
  await student.save();
  res.json({
    message: "education updated successfully",
    student
  });
});
exports.resumeeducationupdate = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const eduIndex= student.resume.education.findIndex((i)=>i.id==req.params.id);
   student.resume.education[eduIndex]={...student.resume.education[eduIndex],...req.body}
  await student.save();
  res.json({
    message: "education updated successfully",
    student
  });
});
exports.resumeeducatiodelete = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const filtereducation= student.resume.education.filter((i)=>i.id!==req.params.id);
   student.resume.education=filtereducation
  await student.save();
  res.json({
    message: "education delete successfully",
    student
  });
})


//jobs
exports.resumejobs = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
  student.resume.jobs.push({ ...req.body, id: uuidv4() });
  await student.save();
  res.json({
    message: "jobs updated successfull",
    student
  });
});
exports.resumejobsupdate = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const jobsIndex= student.resume.jobs.findIndex((i)=>i.id==req.params.id);
   student.resume.jobs[jobsIndex]={...student.resume.jobs[jobsIndex],...req.body}
  await student.save();
  res.json({
    message: "jobs updated successfully",
    student
  });
});
exports.resumejobsdelete = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const filterjobs= student.resume.jobs.filter((i)=>i.id!==req.params.id);
   student.resume.jobs=filterjobs
  await student.save();
  res.json({
    message: "jobs delete successfully",
    student
  });
});



//internships
exports.resumeinternships = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
  student.resume.internships.push({ ...req.body, id: uuidv4() });
  await student.save();
  res.json({
    message: "internships updated successfull",
    student
  });
});
exports.resumeinternshipsupdate = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const internshipsIndex= student.resume.internships.findIndex((i)=>i.id==req.params.id);
   student.resume.internships[internshipsIndex]={...student.resume.internships[internshipsIndex],...req.body}
  await student.save();
  res.json({ 
    message: "internships updated successfully",
    student
  });
});
exports.resumeinternshipsdelete = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const filterinternships= student.resume.internships.filter((i)=>i.id!==req.params.id);
   student.resume.jobs=filterinternships
  await student.save();
  res.json({
    message: "internships delete successfully",
    student
  });
});




//resporesponsibilities

exports.resumeresponsibilities = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
  student.resume.internships.push({ ...req.body, id: uuidv4() });
  await student.save();
  res.json({
    message: "internships updated successfull",
    student
  });
});
exports.resumeresponsibilitiesupdate = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const internshipsIndex= student.resume.internships.findIndex((i)=>i.id==req.params.id);
   student.resume.internships[internshipsIndex]={...student.resume.internships[internshipsIndex],...req.body}
  await student.save();
  res.json({ 
    message: "internships updated successfully",
    student
  });
});
exports.resumeresponsibilitiesdelete = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const filterinternships= student.resume.internships.filter((i)=>i.id!==req.params.id);
   student.resume.jobs=filterinternships
  await student.save();
  res.json({
    message: "internships delete successfully",
    student
  });
});


//courses

exports.resumecourses = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
  student.resume.courses.push({ ...req.body, id: uuidv4() });
  await student.save();
  res.json({
    message: "courses updated successfully",
    student
  });
});
exports.resumecoursesupdate = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const coursesIndex= student.resume.courses.findIndex((i)=>i.id==req.params.id);
   student.resume.courses[coursesIndex]={...student.resume.courses[coursesIndex],...req.body}
  await student.save();
  res.json({
    message: "courses updated successfully",
    student
  });
});
exports.resumecoursesdelete = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const filtercourses= student.resume.courses.filter((i)=>i.id!==req.params.id);
   student.resume.courses=filtercourses
  await student.save();
  res.json({
    message: "course delete successfully",
    student
  });
})
//project
exports.resumeproject = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
  student.resume.project.push({ ...req.body, id: uuidv4() });
  await student.save();
  res.json({
    message: "project updated successfull",
    student
  });
});
exports.resumeprojectupdate = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const projectIndex= student.resume.project.findIndex((i)=>i.id==req.params.id);
   student.resume.project[projectIndex]={...student.resume.project[projectIndex],...req.body}
  await student.save();
  res.json({
    message: "project updated successfully",
    student
  });
});
exports.resumeprojectdelete = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const filterproject= student.resume.project.filter((i)=>i.id!==req.params.id);
   student.resume.project=filterproject
  await student.save();
  res.json({
    message: "project delete successfully",
    student
  });
});

//skills
exports.resumeskills = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
  student.resume.skills.push({ ...req.body, id: uuidv4() });
  await student.save();
  res.json({
    message: "skills updated successfull",
    student
  });
});
exports.resumeskillsupdate = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const skillsIndex= student.resume.skills.findIndex((i)=>i.id==req.params.id);
   student.resume.skills[skillsIndex]={...student.resume.skills[skillsIndex],...req.body}
  await student.save();
  res.json({ 
    message: "skills updated successfully",
    student
  });
});
exports.resumeskillsdelete = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const filterskills= student.resume.skills.filter((i)=>i.id!==req.params.id);
   student.resume.jobs=filterskills
  await student.save();
  res.json({
    message: "skills delete successfully",
    student
  });
});

//accomplishments

exports.resumeaccomplishments = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
  student.resume.accomplishments.push({ ...req.body, id: uuidv4() });
  await student.save();
  res.json({
    message: "accomplishments updated successfull",
    student
  });
});


exports.resumeaccomplishmentsupdate = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const accomplishmentsIndex= student.resume.accomplishments.findIndex((i)=>i.id==req.params.id);
   student.resume.accomplishments[accomplishmentsIndex]={...student.resume.accomplishments[accomplishmentsIndex],...req.body}
  await student.save();
  res.json({ 
    message: "accomplishments updated successfully",
    student
  });
});
exports.resumeaccomplishmentsdelete = catchAsync(async (req, res, next) => {
  const student = await students.findById(req.id);
 const filteraccomplishments= student.resume.accomplishments.filter((i)=>i.id!==req.params.id);
   student.resume.jobs=filteraccomplishments
  await student.save();
  res.json({
    message: "accomplishments delete successfully",
    student
  });
});
