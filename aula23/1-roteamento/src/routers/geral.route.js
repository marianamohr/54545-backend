const { Router } = require("express");

const geralRouter = Router();

const words = ["casa", "carro", "moto", "bicicleta"];

geralRouter.param("word", (req, res, next, word) => {
  console.log("entrou", word);

  const value = words.find((w) => w === word);

  if (!value) {
    console.log("entrou");
    req.word = null;
  } else {
    req.word = value;
  }
  next();
});

geralRouter.param("id", (req, res, next, id) => {
  console.log("id", id);

  next();
});
/*
geralRouter.get(
  "/completo/:word([a-z%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA%C3%BC]+)",
  (req, res) => {
    res.send(`Você digitou: ${req.params.word}`);
  }
);

geralRouter.get("/:word([a-z]+)", (req, res) => {
  res.send(`Você digitou: ${req.params.word}`);
});*/
geralRouter.get("/:carro", (req, res) => {
  res.send(`Você digitou: ccc ${req.params.carro}`);
});

geralRouter.get("/:word/teste", (req, res) => {
  res.send(`Você digitou: ${req.word}`);
});

geralRouter.get("*", (req, res) => {
  res.status(404).send("Palavra nao permitida");
});

module.exports = geralRouter;
