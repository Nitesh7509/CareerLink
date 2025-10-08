const express = require("express");
const {
    homepage,
    StudentSignUp,
    StudentSignIn,
    StudentSignOut,
    profilepage,
    forgetpassowrd,
    forgetpassowrdlink,
    resetpasswordlink,
    profileUpdate,
    profileavatar
} = require("../controllers/indexcontroller");
const { isAuthintication } = require("../middlewares/auth");
const router = express.Router();

router.get("/", homepage);

router.post("/student/signup", StudentSignUp);

router.post("/student/signin", StudentSignIn);


router.post("/student/profile", isAuthintication, profilepage);


router.post("/student/profileupdate", isAuthintication, profileUpdate);


router.post("/student/profileavatar", isAuthintication, profileavatar);


router.post("/student/signout", isAuthintication, StudentSignOut);


router.post("/student/resetpassword", isAuthintication, resetpasswordlink);


router.get("/student/forgetpassword", forgetpassowrd);


router.post("/student/forgetpassword/:id", forgetpassowrdlink);

module.exports = router;