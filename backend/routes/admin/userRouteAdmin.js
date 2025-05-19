const express = require("express")
const router = express.Router();
const userManagementAdmin = require("../../controller/admin/usermanagement")
 
// 5 common API
router.post(
    "/",
    userManagementAdmin.createUser
)
router.get(
    "/",
    userManagementAdmin.getUsers
)
router.get(
    "/:id",          // req.params.id---> dynamic routing
    userManagementAdmin.getOneUser
)
router.get(
    "/:id",          // req.params.id---> dynamic routing
    userManagementAdmin.updateOne
)
router.delete(
    "/id",          // req.params.id---> dynamic routing
    userManagementAdmin.deleteOne
)
module.exports = router;