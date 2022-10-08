const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const boardRouter = require("./boardRouter");

router.use("/", (req, res) => {
  console.log("홈입니다");
});

router.use("/user", userRouter);
router.use("/board", boardRouter);

module.exports = router;
