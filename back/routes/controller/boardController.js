const pool = require("../../db/db.js");

exports.createBoard = async (req, res) => {
  try {
    console.log(req.body);
  } catch (e) {
    console.log("에러발생", e.message);
  }
};

exports.updateBoard = async (req, res) => {
  try {
    const query = "INSERT";
    const [result] = await pool.execute();
  } catch (e) {
    console.log("에러발생", e.message);
  }
};

exports.deleteBoard = async (req, res) => {
  try {
    const query = "INSERT";
    const [result] = await pool.execute();
  } catch (e) {
    console.log("에러발생", e.message);
  }
};

exports.viewBoard = async (req, res) => {
  try {
    const query = "INSERT";
    const [result] = await pool.execute();
  } catch (e) {
    console.log("에러발생", e.message);
  }
};

exports.boardList = async (req, res) => {
  try {
    const query = "INSERT";
    const [result] = await pool.execute();
  } catch (e) {
    console.log("에러발생", e.message);
  }
};
