const db = require("../database/database.js");

// Read all users
exports.getAllUsers = (callback) => {
  const sql = `SELECT id, username, role, created_at FROM users`;
  db.query(sql, callback);
};

// Read user by id
exports.getUserById = (id, callback) => {
  const sql = `SELECT id, username, role, created_at FROM users WHERE id = ?`;
  db.query(sql, [id], callback);
};

// Read user untuk login
exports.getUserByUsername = (username, callback) => {
  const sql = `SELECT * FROM users WHERE username = ?`;
  db.query(sql, [username], callback);
};

// Insert user
exports.createUser = (data, callback) => {
  const sql = `
    INSERT INTO users (username, password, role)
    VALUES (?,?,?)
  `;
  db.query(sql, [data.username, data.password, data.role], callback);
};

// Update user
exports.updateUser = (id, data, callback) => {
  const sql = `
    UPDATE users
    SET username = ?, role = ?
    WHERE id = ?
  `;
  db.query(sql, [data.username, data.role, id], callback);
};

// Delete user
exports.deleteUser = (id, callback) => {
  const sql = `DELETE FROM users WHERE id = ?`;
  db.query(sql, [id], callback);
};
