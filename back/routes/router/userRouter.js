const express = require('express')
const router = express.Router();
const loginController = require('./loginController')

router.get('/',loginController.login);
router.get('/',loginController.join);

module.exports = router;