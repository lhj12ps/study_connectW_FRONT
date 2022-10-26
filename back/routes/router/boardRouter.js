const express = require("express");
const router = express.Router();
const boardController = require("../controller/boardController");

router.post("/createBoard", boardController.createBoard);
router.post("/updateBoard", boardController.updateBoard);
router.post("/deleteBoard", boardController.deleteBoard);
router.post("/viewBoard/:id", boardController.viewBoard);
router.get("/boardList", boardController.boardList);

router.post("/createComment", boardController.creatComment);
router.post("/updateComment", boardController.updateComment);
router.post("/deleteComment", boardController.deleteComment);
router.post("/viewComment/:id", boardController.viewComment);

module.exports = router;
