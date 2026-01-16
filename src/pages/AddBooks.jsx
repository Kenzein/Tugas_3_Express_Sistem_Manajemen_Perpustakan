import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios.jsx";
import "../styles/AddBooks.css";

const AddBook = () => {
  const [form, setForm] = useState({
    judul: "",
    penulis: "",
    tahun: "",
    stok: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/buku", form);
      alert("Buku berhasil ditambahkan");
      navigate("/buku");
    } catch (err) {
      console.error(err);
      alert("Gagal menambah buku");
    }
  };

  return (
    <div className="addbook-page">
      <form className="addbook-card" onSubmit={handleSubmit}>
        <h2>Tambah Buku</h2>

        <input name="judul" placeholder="Judul" onChange={handleChange} />
        <input name="penulis" placeholder="Penulis" onChange={handleChange} />
        <input name="penerbit" placeholder="Penerbit" onChange={handleChange} />
        <input name="tahun" placeholder="Tahun" onChange={handleChange} />
        <input name="stok" placeholder="Stok" onChange={handleChange} />

        <button type="submit">Simpan</button>
      </form>
    </div>
  );
};

export default AddBook;
