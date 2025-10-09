const express = require("express");
const router = express.Router();
const { resumehomepage } = require("../controllers/resumecontroller");
const { isAuthintication } = require("../middlewares/auth");

router.get("/",isAuthintication ,resumehomepage);



module.exports = router;