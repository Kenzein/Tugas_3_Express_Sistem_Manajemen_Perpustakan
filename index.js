require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./src/routes/userRoutes.js");
const authRoutes = require("./src/routes/authRoutes.js");
const buku = require("./src/routes/bukuRoutes.js");

app.use(express.json());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/buku", buku);

app.listen(3031, () => console.log("Server berjalan di port 3031"));
