const express = require("express");
const router = express.Router();
const userRouter = require("./router/userRouter");
<<<<<<< HEAD
// const boardRouter = require("./router/boardRouter");
=======
const boardRouter = require("./router/boardRouter");
>>>>>>> 2371021bb0e00d4279ace00d8e53fd8a2dd47e9b

router.use("/", (req, res) => {
  console.log("홈입니다");
});

router.use("/user", userRouter);
// router.use("/board", boardRouter);

module.exports = router;
