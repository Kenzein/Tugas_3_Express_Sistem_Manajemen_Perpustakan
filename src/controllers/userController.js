const User = require("../models/userModel.js");

// Read all
exports.getAll = (req, res) => {
  User.getAllUsers((err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Gagal mengambil user",
      });
    }
    res.json(result);
  });
};

// Read by id
exports.getById = (req, res) => {
  const id = req.params.id;
  User.getUserById(id, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server error",
      });
    }
    if (result.length === 0) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }
    res.json(result[0]);
  });
};

// Create
exports.create = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Data wajib diisi" });
  }
  User.createUser(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Gagal membuat server",
      });
    }
    res.status(201).json({
      message: "User berhasil dibuat",
    });
  });
};

// Update
exports.update = (req, res) => {
  const id = req.params.id;
  User.updateUser(id, req.body, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Gagal update user" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    res.json({ message: "User berhasil diupdate" });
  });
};

// Delete
exports.delete = (req, res) => {
  const id = req.params.id;
  User.deleteUser(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Gagal hapus user" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    res.json({ message: "User berhasil dihapus" });
  });
};
