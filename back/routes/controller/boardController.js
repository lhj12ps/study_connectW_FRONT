const pool = require("../../db/db.js");

exports.viewBoard = async (req, res) => {
  try {
    const query = "INSERT";
    const [result] = await pool.execute(query);
  } catch (e) {
    const response = {};
  }
};
