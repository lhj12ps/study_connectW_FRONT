const Sequelize = require("sequelize");
const Board = require('./board')

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

db.Board = Board //db에 User객체 저장

Board.init(sequelize) // Board의 init 메서드 실행 -> 테이블이 모델과 연결됨
Board.associate(db) // Board의 associate 메서드 실행 -> 다른 테이블과의 관계적용

module.exports = db;

