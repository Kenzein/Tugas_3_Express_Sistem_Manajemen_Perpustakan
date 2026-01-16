import { useEffect, useState } from "react";
import api from "../api/axios.jsx";
import { Link } from "react-router-dom";
import "../styles/Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);

  // FETCH BUKU
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await api.get("/buku");
        setBooks(res.data.data);
      } catch (err) {
        console.error("Gagal mengambil buku", err);
      }
    };
    fetchBooks();
  }, []);

  // DELETE
  const deleteBook = async (id) => {
    if (!confirm("Yakin hapus buku ini?")) return;
    await api.delete(`/buku/${id}`);
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  // SUBMIT EDIT
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("data berhasil diupdate", editBook);

    await api.put(`/buku/${editBook.id}`, editBook);

    setBooks((prev) => prev.map((b) => (b.id === editBook.id ? editBook : b)));
    setEditBook(null);
  };

  return (
    <div className="books-page">
      <h2>Daftar Buku</h2>

      {/* FORM EDIT */}
      {editBook && (
        <form onSubmit={handleUpdate} className="edit-form">
          <h3>Edit Buku</h3>

          <input
            type="text"
            placeholder="Judul"
            value={editBook.judul}
            onChange={(e) =>
              setEditBook({ ...editBook, judul: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Penulis"
            value={editBook.penulis}
            onChange={(e) =>
              setEditBook({ ...editBook, penulis: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Tahun"
            value={editBook.tahun}
            onChange={(e) =>
              setEditBook({ ...editBook, tahun: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Stok"
            value={editBook.stok}
            onChange={(e) => setEditBook({ ...editBook, stok: e.target.value })}
          />

          <button type="submit">Simpan</button>
          <button type="button" onClick={() => setEditBook(null)}>
            Batal
          </button>
        </form>
      )}

      {/* TABEL */}
      <Link to="/buku/add">
        <button className="btn-add">Tambah Buku</button>
      </Link>
      <table border="1">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Tahun</th>
            <th>Stok</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td>{b.judul}</td>
              <td>{b.penulis}</td>
              <td>{b.tahun}</td>
              <td>{b.stok}</td>
              <td>
                <button className="btn-edit" onClick={() => setEditBook(b)}>
                  Edit
                </button>
                <button className="btn-delete" onClick={() => deleteBook(b.id)}>
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
