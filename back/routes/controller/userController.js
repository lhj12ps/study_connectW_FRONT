const { createToken } = require("../../util/jwt");
const User = require("../../models/user");

exports.createUser = async (req, res) => {
  try {
    // const query = "INSERT";
    //console.log("로그 확인용");
    const { userid, userpw, username, nickname, gender, tell, email, address } =
      req.body;
    // console.log("req.body", userid);
    // console.log(
    //   "create확인용",
    //   userid,
    //   userpw,
    //   username,
    //   nickname,
    //   gender,
    //   tell,
    //   email,
    //   address
    // );
    const data = await User.findOne({
      where: {
        email,
      },
    });
    // console.log("data니??", data);

    if (data == null) {
      const result = await User.create({
        userid,
        tell,
        userpw,
        username,
        nickname,
        gender,
        email,
        address,
      });
      console.log("백result:", result);
      res.json(result);
    }

    // Create a new user
    // const jane = await User.create({
    //   userid,
    //   userpw,
    //   username,
    //   nickname,
    //   gender,
    //   tell,
    //   email,
    //   address,
    // });
    // console.log("Jane's auto-generated ID:", jane.id);
    // res.json(req.body);
  } catch (e) {
    console.log("에러발생", e.message);
    res.json(e);
  }
};

exports.login = (req, res) => {};
exports.join = (req, res) => {};
