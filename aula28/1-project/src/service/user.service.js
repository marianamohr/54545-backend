const userDao = require("../factory/factory")

const get = async () => {
  const users = await userDao.get();

  return users;
};

module.exports = { get };
