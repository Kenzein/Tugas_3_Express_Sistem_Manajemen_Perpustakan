const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const checkIsAuth = require("../middleware/auth.js");

router.get("/", checkIsAuth, userController.getAll);
router.get("/:id", checkIsAuth, userController.getById);
router.post("/", userController.create);
router.put("/:id", checkIsAuth, userController.update);
router.delete("/:id", checkIsAuth, userController.delete);

module.exports = router;
