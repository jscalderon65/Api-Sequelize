const User = require("../Db/Models/user.js");

const createUser = (req, res) => {
  const { body } = req;
  User.create(body)
    .then((user) => {
      res.json(user);
    })
    .catch((e) => res.send(e));
};

const listUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((e) => res.send(e));
};

const getUser = (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then((user) => res.json(user))
    .catch((e) => res.send(e));
};

const editUser = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  User.update(body, {
    where: {
      id,
    },
  })
    .then((post) => res.json(post))
    .catch((e) => res.send(e));
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  User.destroy({
    where: {
      id,
    },
  })
    .then((user) => res.json(user))
    .catch((e) => res.send(e));
};

module.exports = { createUser, listUsers, editUser, deleteUser, getUser };
