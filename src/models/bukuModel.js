const db = require("../database/database.js");

exports.getAll = (callback) => {
  db.query("SELECT * FROM books", callback);
};

exports.getById = (id, callback) => {
  db.query("SELECT * FROM books WHERE id = ?", [id], callback);
};

exports.create = (data, callback) => {
  const sql = `
    INSERT INTO books (judul, penulis, penerbit, tahun, stok)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(
    sql,
    [data.judul, data.penulis, data.penerbit, data.tahun, data.stok],
    callback
  );
};

exports.update = (id, data, callback) => {
  const sql = `
    UPDATE books
    SET judul = ?, penulis = ?, penerbit = ?, tahun = ?, stok = ?
    WHERE id = ?
  `;
  db.query(
    sql,
    [data.judul, data.penulis, data.penerbit, data.tahun, data.stok, id],
    callback
  );
};

exports.delete = (id, callback) => {
  db.query("DELETE FROM books WHERE id = ?", [id], callback);
};
