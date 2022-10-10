const User = require("../../models/user");

exports.createUser = async (req, res) => {
  try {
    const query = "INSERT";
    console.log("로그 확인용");
    const { userid, userpw, username, nickname, gender, tell, email, address } =
      req.body;
    // Create a new user
    const jane = await User.create({
      userid,
      userpw,
      username,
      nickname,
      gender,
      tell,
      email,
      address,
    });
    console.log("Jane's auto-generated ID:", jane.id);
    res.json(jane);
  } catch (e) {
    console.log("에러발생", e.message);
    res.json(e);
  }
};

exports.login = (req, res) => {};
exports.join = (req, res) => {};
