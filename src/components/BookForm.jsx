import { useState } from "react";
import api from "../api/axios.jsx";
import "../styles/BookForm.css";

const BookForm = ({ refresh }) => {
  const [form, setForm] = useState({
    judul: "",
    penulis: "",
    penerbit: "",
    tahun: "",
    stok: "",
  });
  const submit = async () => {
    await api.post("/books", form);
    refresh();
  };
  return (
    <>
      <div className="bookform-card">
        <h3>Tambah Buku</h3>
        <input
          type="text"
          placeholder="Judul"
          onChange={(e) => setForm({ ...form, judul: e.target.value })}
        />
        <input
          type="text"
          placeholder="Penulis"
          onChange={(e) => setForm({ ...form, penulis: e.target.value })}
        />
        <input
          type="text"
          placeholder="Penerbit"
          onChange={(e) => setForm({ ...form, penerbit: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tahun"
          onChange={(e) => setForm({ ...form, tahun: e.target.value })}
        />
        <input
          type="text"
          placeholder="Stok"
          onChange={(e) => setForm({ ...form, stok: e.target.value })}
        />
        <button onClick={submit}>Tambah Buku</button>
      </div>
    </>
  );
};

export default BookForm;
