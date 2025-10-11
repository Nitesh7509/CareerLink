const express = require("express");
const router = express.Router();
const { resumehomepage, resumeeducation, resumeeducationupdate, resumeeducatiodelete, resumejobs, resumejobsupdate,  resumeinternships,  resumeinternshipsupdate, resumeinternshipsdelete, resumejobsdelete, resumeresponsibilities, resumeresponsibilitiesupdate, resumeresponsibilitiesdelete, resumecourses, resumecoursesupdate, resumecoursesdelete, resumeproject, resumeprojectupdate, resumeprojectdelete, resumeskills, resumeskillsupdate, resumeskillsdelete, resumeaccomplishments, resumeaccomplishmentsupdate, resumeaccomplishmentsdelete } = require("../controllers/resumecontroller");
const { isAuthintication } = require("../middlewares/auth");

router.get("/",isAuthintication ,resumehomepage);

//education
router.post("/education",isAuthintication ,resumeeducation);

router.post("/education/update/:id",isAuthintication ,resumeeducationupdate);


router.post("/education/delete/:id",isAuthintication ,resumeeducatiodelete);

//jobs

router.post("/jobs",isAuthintication ,resumejobs);

router.post("/jobs/update/:id",isAuthintication ,resumejobsupdate);


router.post("/jobs/delete/:id",isAuthintication ,resumejobsdelete);

//internships
router.post("/internships",isAuthintication ,resumeinternships);

router.post("/internships/update/:id",isAuthintication ,resumeinternshipsupdate);


router.post("/internships/delete/:id",isAuthintication ,resumeinternshipsdelete);

//responsibilities
router.post("/responsibilities",isAuthintication ,resumeresponsibilities);

router.post("/responsibilities/update/:id",isAuthintication ,resumeresponsibilitiesupdate);


router.post("/responsibilities/delete/:id",isAuthintication ,resumeresponsibilitiesdelete);


//courses
router.post("/courses",isAuthintication ,resumecourses);

router.post("/courses/update/:id",isAuthintication ,resumecoursesupdate);


router.post("/courses/delete/:id",isAuthintication ,resumecoursesdelete);


//project

router.post("/project",isAuthintication ,resumeproject);

router.post("/project/update/:id",isAuthintication ,resumeprojectupdate);


router.post("/project/delete/:id",isAuthintication ,resumeprojectdelete);

//skills
router.post("/skills",isAuthintication ,resumeskills);

router.post("/skills/update/:id",isAuthintication ,resumeskillsupdate);


router.post("/skills/delete/:id",isAuthintication ,resumeskillsdelete);

//accomplishments
router.post("/accomplishments",isAuthintication ,resumeaccomplishments);

router.post("/accomplishments/update/:id",isAuthintication ,resumeaccomplishmentsupdate);


router.post("/accomplishments/delete/:id",isAuthintication ,resumeaccomplishmentsdelete);



module.exports = router;