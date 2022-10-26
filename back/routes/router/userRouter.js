const express = require("express");
const router = express.Router();
const loginController = require("../controller/userController");
const userController = require("../controller/userController");

router.post("/login", loginController.login);
router.post("/join", userController.join);

module.exports = router;
