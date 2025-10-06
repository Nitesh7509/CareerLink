const express = require("express");
const { homepage, StudentSignUp, StudentSignIn, StudentSignOut, profilepage, forgetpassowrd } = require("../controllers/indexcontroller");
const { isAuthintication } = require("../middlewares/auth");
const router = express.Router();

router.get("/",homepage);


router.post("/student/profile",isAuthintication,profilepage);


router.post("/student/signup",StudentSignUp);



router.post("/student/signin",StudentSignIn);


router.post("/student/signout",isAuthintication,StudentSignOut);




router.post("/student/forwardpassword",forgetpassowrd);

module.exports = router;