const pool = require("../../db/db.js").pool;

exports.viewBoard = async (req, res) => {
  try {
    const [result] = await pool.execute();
  } catch (e) {
    const response = {
      result: {
        row: 0,
        id: 0,
      },
      errno: e.errno,
    };
  }
};
