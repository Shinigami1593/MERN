const express = require("express")
const router = express.Router();
const upload = require("../../middleware/fileupload")

const productController = require("../../controller/admin/productmanagement")

router.post("/",upload.single("image"),productController.createProduct)
router.get("/",productController.getProducts)

module.exports = router;
