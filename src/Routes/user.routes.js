const express = require("express");
const {
  createUser,
  getUser,
  listUsers,
  editUser,
  deleteUser,
} = require("../Services/user.services.js");
const router = express.Router();
router.get("/list", listUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.patch("/:id", editUser);
router.delete("/:id", deleteUser);
module.exports = router;
