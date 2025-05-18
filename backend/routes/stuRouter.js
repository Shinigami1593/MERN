const express = require("express")
const router = express.Router();

const studentController = require("../controller/studentController")

router.post("/create", studentController.registerStudent)

module.exports = router;