const jwt = require("jsonwebtoken");
const Auth = require("../models/authModel.js");

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username dan password wajib diisi",
    });
  }

  Auth.login(username, password, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server error",
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        message: "Username atau password salah",
      });
    }

    const user = result[0];

    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.json({
      message: "Login berhasil",
      token: token,
    });
  });
};
