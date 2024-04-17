const process = require('node:process');

console.log("listNumbers");

const listNumbers = (...numbers) => {
  //console.log(numbers)
  numbers.forEach((n) => {
    // console.log(typeof n);
    if (typeof n !== "number") {
      process.exit(4);
      console.log(typeof n);
    }
  });
};

// listNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
listNumbers(1, 2, 3, "4", 5, 6, true, 8, "9", 10);
