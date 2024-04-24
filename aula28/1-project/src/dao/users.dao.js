//const userModel = require("../model/user.model");

const users =[
  {
    "name": "Mari",
    "lastName": "Mohr",
    "email": "marianamohr@gmail.com",
    "password": "123456",
    "role": "admin"
  },
  {
    "name": "Gui",
    "lastName": "Salzer",
    "email": "gui@gmail.com",
    "password": "123456",
    "role": "user"
  }
]
/* const get = async () => {
  const users = await userModel.find({});

  const usersFormated = users.map((u) => {
    return {
      name: u.first_name,
      lastName: u.last_name,
      email: u.email,
      password: u.password,
      role: u.role,
    };
  });
  return usersFormated;
}; */

const get = () => {

  return users;
}

module.exports = { get };
