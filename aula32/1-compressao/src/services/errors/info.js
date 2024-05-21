const generateUserError = (user) => {
  return `error to create user: ${user.name}, ${user.email}, ${user.age}`;
};

module.exports = generateUserError;
