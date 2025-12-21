const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "perpustakaan_sem3_express",
});

module.exports = db;
