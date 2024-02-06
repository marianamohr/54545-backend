const express = require("express");
const ManagerUsers = require("./ManagerUsers");
const app = express();

const managerUsers = new ManagerUsers();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await managerUsers.consultarUsuarios();
    return res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao consultar usuários." });
  }
});

app.post("/usuarios", async (req, res) => {
  const { name, sobrenome, idade, curso } = req.body;
  try {
    if (!name || !sobrenome || !idade || !curso) {
      return res.status(400).json({ message: "Impossivel Cadastrar" });
    }
    await managerUsers.criarUsuario(req.body);
    return res.status(201).json({ message: "Usuario cadastrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao cadastrar usuários." });
  }
});

app.put("/usuarios/:id", async (req, res) => {
  const user = req.body;
  const { id } = req.params;

  try {
    await managerUsers.updateUser(user, id);
    return res.status(200).json({ message: "Usuario Alterado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao atualizar usuários." });
  }
});

app.delete("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const done = await managerUsers.deleteUser(id)
    if (done) {
      return res.status(204).json();
    }
    res.status(404).json({ error: "Usuario nao encontrado/deletado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao atualizar usuários." });
  }
});


module.exports = app;
