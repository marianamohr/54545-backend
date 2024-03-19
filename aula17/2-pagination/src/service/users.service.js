const userModel = require("../model/user.model");

const getUsers = async (nome, page) => {
  let users = await userModel.paginate(
    { first_name: nome },
    { limit: 1, page: page }
  );
  console.log(users);
  return users;
};

module.exports = { getUsers };
