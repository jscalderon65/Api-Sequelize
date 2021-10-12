const Post = require("../Db/Models/post.js");

const getListPost = (req, res) => {
  Post.findAll()
    .then((post) => res.json(post))
    .catch((e) => res.send(e));
};

const getPost = (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then((post) => res.json(post))
    .catch((e) => res.send(e));
};

const createPost = (req, res) => {
  const { body } = req;
  Post.create(body)
    .then((post) => {
      res.json(post);
    })
    .catch((e) => res.send(e));
};

const editPost = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  Post.update(body, {
    where: {
      id,
    },
  })
    .then((post) => res.json(post))
    .catch((e) => res.send(e));
};

const deletePost = (req, res) => {
  const { id } = req.params;
  Post.destroy({
    where: {
      id,
    },
  })
    .then((post) => res.json(post))
    .catch((e) => res.send(e));
};

module.exports = { getListPost, getPost, createPost, editPost, deletePost };
