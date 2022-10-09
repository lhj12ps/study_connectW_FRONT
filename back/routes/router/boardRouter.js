const express = require("express");
const router = express.Router();
const boardController = require("../controller/boardController");

router.get("/viewBoard", boardController.viewBoard);

module.exports = router;
