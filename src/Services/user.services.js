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

module.exports = { createUser, listUsers };
