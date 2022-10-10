const express = require("express");
const router = express.Router();
const userRouter = require("./router/userRouter");
const boardRouter = require("./router/boardRouter");

router.use("/user", userRouter);
router.use("/board", boardRouter);

router.use("/", (req, res) => {
  console.log("홈입니다");
});

module.exports = router;
