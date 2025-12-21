const Buku = require("../models/bukuModel.js");

exports.getAllBuku = (req, res) => {
  Buku.getAll((err, results) => {
    if (err)
      return res.status(500).json({ message: "Gagal mengambil data buku" });

    res.json({
      message: "Data buku berhasil diambil",
      data: results,
    });
  });
};

exports.getBukuById = (req, res) => {
  const id = req.params.id;

  Buku.getById(id, (err, results) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (results.length === 0)
      return res.status(404).json({ message: "Buku tidak ditemukan" });

    res.json(results[0]);
  });
};

exports.createBuku = (req, res) => {
  const { judul, penulis, penerbit, tahun, stok } = req.body;

  if (!judul || !penulis || !penerbit || !tahun || stok == null)
    return res.status(400).json({ message: "Data buku tidak lengkap" });

  Buku.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ message: "Gagal menambahkan buku" });

    res.status(201).json({
      message: "Buku berhasil ditambahkan",
      id: result.insertId,
    });
  });
};

exports.updateBuku = (req, res) => {
  const id = req.params.id;

  Buku.update(id, req.body, (err, result) => {
    if (err) return res.status(500).json({ message: "Gagal update buku" });

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Buku tidak ditemukan" });

    res.json({ message: "Buku berhasil diupdate" });
  });
};

exports.deleteBuku = (req, res) => {
  const id = req.params.id;

  Buku.delete(id, (err, result) => {
    if (err) return res.status(500).json({ message: "Gagal hapus buku" });

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Buku tidak ditemukan" });

    res.json({ message: "Buku berhasil dihapus" });
  });
};
