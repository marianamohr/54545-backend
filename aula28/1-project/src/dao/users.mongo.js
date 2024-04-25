const userModel = require("../model/user.model");
const {userDTO} = require("../dto/users.dto")

 const get = async () => {
  const users = await userModel.find({});

  const usersFormated = users.map((u) => {
    return userDTO(u);
  });
  return usersFormated;
}; 

module.exports = { get };
