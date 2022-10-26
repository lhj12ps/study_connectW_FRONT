const jwt = require("jsonwebtoken");
const secretKey = "kang";
const algorithm = "HS256";
const option = { algorithm };

// 토큰 생성
function createToken(payload) {
  return jwt.sign(payload, secretKey, option);
}

// 토큰 검증
function verifyPayload(token) {
  return jwt.verify(token, secretKey)
}

// 토큰 디코딩
function decodePayload(token) {
  return jwt.decode(token, secretKey)
}

module.exports = { createToken, decodePayload };