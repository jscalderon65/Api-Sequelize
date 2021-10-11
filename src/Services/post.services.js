const Post = require("../Db/Models/post.js");
const getListPost = (req, res) => {
  Post.findAll()
    .then((post) => res.json(post))
    .catch((e) => res.send("Error obteniendo el post"));
};
const getPost = (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then((post) => res.json(post))
    .catch((e) => res.send("Error obteniendo el post"));
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
    .catch((e) => res.send("Error actualizando datos del post"));
};
const deletePost = (req, res) => {
  const { id } = req.params;
  Post.destroy({
    where: {
      id,
    },
  })
    .then((post) => res.json(post))
    .catch((e) => res.send("Error eliminando el post"));
};

module.exports = { getListPost, getPost, createPost, editPost, deletePost };
