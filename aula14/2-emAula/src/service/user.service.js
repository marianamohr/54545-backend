const userModel = require("../model/user.model");

const getUsers = async () => {
  console.log("teste");
  const users = await userModel.find();

  return users;
};

const createUser = async ({ first_name, last_name, email }) => {
  console.log("teste");
  const users = await userModel.create({ first_name, last_name, email });

  return users;
};

const updateUser = async ({ first_name, last_name, email }, uid) => {
    const userUpdated = await userModel.updateOne({_id: uid}, {first_name, last_name, email});
    return userUpdated;
};

const deleteUser = async (uid) => {
  const user = await userModel.deleteOne({ _id: uid });
  return user;
};

module.exports = { getUsers, createUser, deleteUser, updateUser };
