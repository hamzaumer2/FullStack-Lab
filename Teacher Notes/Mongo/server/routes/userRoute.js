const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.post("/new", userController.newUser);
router.get("/getAll", userController.getAllUsers);

module.exports = router;
