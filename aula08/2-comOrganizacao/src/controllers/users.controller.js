
const ManagerUsers = require("../ManagerUsers");
const managerUsers = new ManagerUsers();


const getAll = async (req, res) => {
    try {
      const usuarios = await managerUsers.consultarUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erro ao consultar usuários." });
    }
  }

  const create = async (req, res) => {
    const user = req.body;
    try {
      await managerUsers.criarUsuario(user);
      res.status(201).json({ message: "Usuario cadastrado" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erro ao cadastrar usuários." });
    }
  };

  module.exports = {
    getAll, create
  }