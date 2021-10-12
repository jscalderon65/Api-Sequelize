const express = require("express");
const {
  createPost,
  getPost,
  editPost,
  deletePost,
  getListPost,
} = require("../Services/post.services.js");
const router = express.Router();
router.get("/list", getListPost);
router.get("/:id", getPost);
router.post("/", createPost);
router.patch("/:id", editPost);
router.delete("/:id", deletePost);
module.exports = router;
