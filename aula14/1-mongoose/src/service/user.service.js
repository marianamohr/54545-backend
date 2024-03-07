const userModel = require("../model/user.model");

const getUsers = async () => {
  const users = await userModel.find();
  return users;
};

const createUser = async ({ first_name, last_name, email }) => {
  const userCreated = await userModel.create({ first_name, last_name, email });
  return userCreated;
};

const updateUser = async ({ first_name, last_name, email }, uid) => {
    const userUpdated = await userModel.updateOne({_id: uid}, {first_name, last_name, email});
    return userUpdated;
};

const getUsersById = async (uid) => {
    const user = await userModel.findById(uid);
    return user;
};

const deleteUser = async (uid) => {
    const user = await userModel.deleteOne({_id: uid});
    return user;
};

module.exports = { getUsers, createUser, getUsersById, deleteUser, updateUser };
