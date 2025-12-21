const express = require("express");
const router = express.Router();
const bukuController = require("../controllers/bukuController.js");
const checkIsAuth = require("../middleware/auth.js");

router.get("/", bukuController.getAllBuku);
router.get("/:id", bukuController.getBukuById);

router.post("/", checkIsAuth, bukuController.createBuku);
router.put("/:id", checkIsAuth, bukuController.updateBuku);
router.delete("/:id", checkIsAuth, bukuController.deleteBuku);

module.exports = router;
