const express = require("express");
const router = express.Router();
const boardController = require("../controller/boardController");

router.post("/createBoard", boardController.createBoard);
router.post("/updateBoard", boardController.updateBoard);
router.post("/deleteBoard", boardController.deleteBoard);
router.post("/viewBoard", boardController.viewBoard);
router.post("/boardList", boardController.boardList);

module.exports = router;
