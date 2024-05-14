const { faker } = require("@faker-js/faker");

const generateUsers = (number) => {
  //const randomNumber = faker.finance.randomNumber()
  //const randomNumber = 100;
  //console.log(randomNumber);

  const users = [];

  for (let index = 0; index < number; index++) {
    const user = {
      name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      sex: faker.person.sex(),
    };
    users.push(user);
  }
  return users;
};

module.exports = generateUsers;
