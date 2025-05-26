const express = require("express")
const router = express.Router();

const categoryController = require("../../controller/admin/categoryController")

router.post("/",categoryController.createCategory)

router.get("/",categoryController.getCategory)

router.get("/:id",categoryController.getOneCategory)

router.put("/:id",categoryController.updateOne)

router.delete("/:id",categoryController.deleteOne)

module.exports = router;