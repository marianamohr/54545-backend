const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/users.controller");

const validateUser = require("../middlewares/validateUser")

const entrada = (req, res, next) => {
  console.log(`Tentativa de acesso}`);
  next();
};

const logger = (req, res, next) => {
  console.log(
    `${new Date()} - Rota: ${req.route.path} - Método: ${
      req.route.stack[0].method
    }`
  );
  next();
};

userRouter.use(entrada);

userRouter.get("/", logger, userController.getAll);

userRouter.post("/", validateUser, logger, userController.create);

module.exports = userRouter;
