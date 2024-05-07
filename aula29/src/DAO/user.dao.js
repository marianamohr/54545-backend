const userModel = require("../models/user.model")



const getUsers = async () => {
    const users = await userModel.find();
    return users;
};

const createUser = async (user) => {
    const userCreated = await userModel.create(user)
    return userCreated;
};



module.exports = {getUsers, createUser}