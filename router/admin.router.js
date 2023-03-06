const express = require("express");
const AdminController = require("../controller/admin.controller");
const router = express.Router();
router.route("/").get(AdminController.getAdmin);

module.exports = router;
