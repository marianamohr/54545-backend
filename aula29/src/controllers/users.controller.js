const userDao = require("../DAO/user.dao");

const getUsers = async (req, res) => {
  res.send({ status: "success", result: "getUsers" });
};

const getUserById = async (req, res) => {
  res.send({ status: "success", result: "getUserById" });
};

const saveUser = async (req, res) => {
  const user = req.body;
  console.log("xablau", user);
  const userCreated = await userDao.createUser(user);
  res.send({ status: "success", result: userCreated });
};

module.exports = {
  getUsers,
  getUserById,
  saveUser,
};
