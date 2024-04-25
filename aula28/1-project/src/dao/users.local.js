//const userModel = require("../model/user.model");

const users = [
  {
    name: "harry",
    lastName: "potter",
    email: "harrypotter@hogwarts.com",
    password: "noixquevoa",
    role: "aluno",
  }
];

const get = () => {
  return users;
};

module.exports = { get };
