const express = require("express")
const router = express.Router();

const userController = require("../controller/userController.js")

router.post("/register", userController.registerUser)

module.exports = router;