const jwt = require("jsonwebtoken");
const secretKey = "kang";
const algorithm = "HS256";
const option = { algorithm };

function createToken(payload) {
  return jwt.sign(payload, secretKey, option);
}

function decodePayload(token) {
  return jwt.verify(token, secretKey);
}

module.exports = { createToken, decodePayload };
// jwt 토큰 생성,해석
