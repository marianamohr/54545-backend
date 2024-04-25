const userDTO = (u) => {
  return {
    name: u.first_name,
    lastName: u.last_name,
    fullName: u.first_name + " " + u.last_name,
    email: u.email,
    password: u.password,
    role: u.role,
  };
};

module.exports = { userDTO };
