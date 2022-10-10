const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env]; // 데이터베이스 설정을 불러옴
const db = {};

// 데이터베이스 - mysql 연결
const sequelize = new Sequelize( // 새 시퀄라이즈 객체를 만들어서
  config.database, // 불러온 데이터베이스(mysql)과 연결한다.
  config.username,
  config.password,
  config
);

db.sequelize = sequelize; // 재사용을 위해서 db.sequelize에 저장
module.exports = db;