const express = require("express");
// const config = require("./config/config");
const compression = require("express-compression");
const customError = require("./services/errors/CustomError");
const generate = require("./services/errors/info");
const errorMiddleware = require("./middlewares/errors/index");
const app = express();
app.use(express.json());

app.use(
  compression({
    brotli: { enabled: true, zlib: {} },
  })
);

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.get("/stringGrande", (req, res) => {
  let string = "Hello Corders! Uma string muito grande! ";
  for (let index = 0; index < 10000000; index++) {
    string += "Hello Corders! Uma string muito grande! ";
  }

  res.send(string);
});

app.post("/user", (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    customError({
      name: "Error creation User",
      cause: generate({ name, email, age }),
      message: "Error trying crate new user",
      status: 401,
    });
  }

  res.status(200).json({ message: "ok", user: { name, email, age } });
});

app.use(errorMiddleware);

module.exports = app;
