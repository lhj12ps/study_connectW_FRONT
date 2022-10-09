require("dotenv").config();
const mysql = require("mysql2/promise");

const host = process.env.DB_HOST || "localhost";
const user = process.env.user || "hancoco";
const password = process.env.password || "0000";
const database = process.env.database || "study_connectWeb3";

const config = { host, user, password, database, connectionLimit: 5 };
const pool = mysql.createPool(config)
// const promisePool = pool.promise()
// exports.pool = promisePool
module.exports = pool;