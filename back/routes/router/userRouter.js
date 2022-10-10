const express = require("express");
const router = express.Router();
const loginController = require("../controller/userController");
const userController = require("../controller/userController");

router.get("/", loginController.login);
router.get("/", loginController.join);
router.post("/join", userController.createUser);

module.exports = router;
