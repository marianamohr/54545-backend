const userDao = require("../dao/users.dao");

const get = async () => {
  const users = await userDao.get();

  return users;
};

module.exports = { get };
