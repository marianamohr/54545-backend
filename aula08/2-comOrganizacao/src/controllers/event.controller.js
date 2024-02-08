const ManagerTicket = require("../ManagerTicket");
const managerTickets = new ManagerTicket();

const getAll = async (req, res) => {
  try {
    const usuarios = await managerTickets.consultarEventos();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao consultar eventos." });
  }
};

const create = async (req, res) => {
  const event = req.body;
  try {
    await managerTickets.criarEvento(event);
    res.status(201).json({ message: "Evento cadastrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao cadastrar evento." });
  }
};

module.exports = {
  getAll,
  create,
};
