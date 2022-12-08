// represents the jpa layer to fetch data from db
const Users = require("../model/users");

const register = async (req, res) => {
    try {
        const account = {
            username: req.body.username,
            password: req.body.password,
          };
          await Users.create(account).then(() => {
            res.sendStatus(201);
          });
    } catch (errors) {
        return res.status(404).json(errors);
    }
};
const getUser = async (req, res) => {
    const username = req.query.username;
    await Users.findOne({ where: { username: username } }).then((item) => {
      if (item != null) {
        res.send(item);
      } else {
        res.sendStatus(404);
      }
    });
  };

module.exports = {
  register,
  getUser,
};
