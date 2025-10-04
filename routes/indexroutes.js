const express = require("express");
const { homepage, StudentSignUp, StudentSignIn, StudentSignOut } = require("../controllers/indexcontroller");
const router = express.Router();

router.get("/",homepage);


router.post("/student/signup",StudentSignUp);



router.post("/student/signin",StudentSignIn);


router.post("/student/signout",StudentSignOut);

module.exports = router;