const { createToken } = require("../../util/jwt");
const User = require("../../models/user");

const option = {
  result: 0,
};

exports.join = async (req, res) => {
  try {
    console.log(req.body)
    const { userid, userpw, username, nickname, gender, tell, email, address,account } =
      req.body;
    const data = await User.findOne({
      where: {
        email,
      },
    });

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
        account
      });
      console.log("result:", result);
      res.json(result);
    }
  } catch (e) {
    console.log("에러발생", e.message);
    res.json(e);
  }
};

exports.login = async (req, res) => {
  const { userid, userpw } = req.body;
  try {
    const response = await User.findOne({
      where: { userid, userpw },
    });

    if (response !== null) {
      option.result = 1;
      const jwt_token = createToken({ userid,userpw });
      res.json({ option, jwt_token });
    }
  } catch (e) {}
};
