const express = require("express");
const { homepage } = require("../controllers/indexcontroller");
const router = express.Router();

router.get("/",homepage)

module.exports = router;