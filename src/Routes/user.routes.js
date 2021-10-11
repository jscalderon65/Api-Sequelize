const express = require("express");
const { createUser, listUsers } = require("../Services/user.services.js");
const router = express.Router();
router.post("/create", createUser);
router.get("/list", listUsers);
module.exports = router;
