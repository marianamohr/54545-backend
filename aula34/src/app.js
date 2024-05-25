const log = require("./pkg/logger");
const express = require("express");

const app = express();

//app.use(log);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/simpleOperation", (req, res) => {
  // const { logger } = req;
  // logger.http(`to no simpleOperation`);

  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  res.send("Sum is: " + sum);
});


app.get("/complexOperation", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 10000000000000; i++) {
    sum += i;
  }
  res.send("Sum is: " + sum);
});

module.exports = app;
