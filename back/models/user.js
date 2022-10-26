const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userid: {
          type: Sequelize.STRING(64),
          allowNull: false,
          unique: true,
        },
        tell: {
          type: Sequelize.STRING(64),
          allowNull: false,
          unique: false,
        },
        userpw: {
          type: Sequelize.STRING(64),
          allowNull: false,
          unique: false,
        },
        username: {
          type: Sequelize.STRING(64),
          allowNull: false,
          unique: false,
        },
        nickname: {
          type: Sequelize.STRING(64),
          allowNull: false,
          unique: false,
        },
        gender: {
          type: Sequelize.STRING(64),
          allowNull: false,
          unique: false,
        },
        email: {
          type: Sequelize.STRING(64),
          allowNull: false,
          unique: false,
        },
        address: {
          type: Sequelize.STRING(64),
          allowNull: false,
          unique: false,
        },
      },
      {
        sequelize,
        timestamps: true, // true : createdAt,updatedAt컬럼 자동추가함
        underscored: false, // true : 카멜표기법을 스네이크표기법으로 바꿈
        modelName: "User",
        tableName: "users",
        paranoid: false, // true : deletedAt컬럼 자동추가, 로우 완전삭제가 되지않는다.
        charset: "utf8", // 한글입력설정, 이모티콘입력설정은 utf8mb4
        collate: "utf8_general_ci", // 한글입력설정, 이모티콘입력설정은 utf8mb4_general_ci
      }
    );
  }
  static associate(db) {
    // 다른 테이블과 관계를 맺고싶을때 작성
    // 예) 일대다, 다대다 같은 관계
  }
}

module.exports = User;
