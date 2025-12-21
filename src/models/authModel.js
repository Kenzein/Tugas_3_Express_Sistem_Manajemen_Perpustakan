const db = require("../database/database.js");

exports.login = (username, password, callback) => {
  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.query(sql, [username, password], callback);
};
