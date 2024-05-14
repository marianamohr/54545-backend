const soma2 = (...nums) => {
  let validInput = true;
  if (nums.length === 0) return 0;

  for (let index = 0; index < nums.length; index++) {
    if (typeof nums[index] !== "number") {
      validInput = false;
    }
  }
  if (!validInput) return null;
  let result = 0;
  for (let index = 0; index < nums.length; index++) {
    result += nums[index];
  }
  return result;
};

const soma = (...nums) => {
  if (nums.length === 0) return 0;
  //const test = nums.every((num) => typeof num === "number");
  // console.log(test);
  if (!nums.every((num) => typeof num === "number")) {
    return null;
  }
  return nums.reduce((acc, cur) => acc + cur);
};

module.exports = { soma, soma2 };
