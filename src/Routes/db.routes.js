const express = require("express");
const { isConected } = require("../Services/db.services.js");
const router = express.Router();
router.get("/", isConected);
module.exports = router;
