const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const loginController = require("../controller/userController");
=======
const loginController = require('../controller/userController')
>>>>>>> 2371021bb0e00d4279ace00d8e53fd8a2dd47e9b

router.get("/", loginController.login);
router.get("/", loginController.join);

module.exports = router;
