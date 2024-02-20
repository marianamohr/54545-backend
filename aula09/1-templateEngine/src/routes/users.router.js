const express = require("express");

const router = express.Router();

const users = [];

router.post("/", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
   if(!name || !email || !password){
    return res.send("Impossivel cadastrar")
   }

  users.push({ name, email, password });

  // console.log("Usuário registrado:", { name, email, password });
  console.log(users);
  res.send("Registro bem-sucedido!");
});

module.exports = router;
