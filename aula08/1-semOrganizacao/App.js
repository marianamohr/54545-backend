const fs = require("fs");

class ManagerUsers {
  #pathData = `./users.json`;
  constructor() {}

  #lerArquivo = async () => {
    let resultado = await fs.promises.readFile(this.#pathData, "utf-8");
    const resultadoParsed = await JSON.parse(resultado);
    return resultadoParsed;
  };
  criarUsuario = async (user) => {
    const resultadoParsed = await this.#lerArquivo();
    const id = resultadoParsed.at(-1).id + 1;
    user.id = id;
    resultadoParsed.push(user);

    const dataToSave = await JSON.stringify(resultadoParsed);

    await fs.promises.writeFile(this.#pathData, dataToSave);
  };

  consultarUsuarios = async () => {
    const resultadoParsed = await this.#lerArquivo();
    return resultadoParsed;
  };

  consultaByName = async (name) => {
    const resultadoParsed = await this.#lerArquivo();
    const userFound = resultadoParsed.filter((user) => user.name === name);
    return userFound;
  };

  updateUser = async (dataToUpdate, id) => {
    const resultadoParsed = await this.#lerArquivo();

    const userFound = resultadoParsed.filter((user) => user.name === name);
    return userFound;
  };
}

class TicketManager {
  #pathData = `./events.json`;
  constructor() {}

  #lerArquivo = async () => {
    let resultado = await fs.promises.readFile(this.#pathData, "utf-8");
    const resultadoParsed = await JSON.parse(resultado);
    return resultadoParsed;
  };
  criarUsuario = async (user) => {
    const resultadoParsed = await this.#lerArquivo();
    const id = resultadoParsed.at(-1).id + 1;
    user.id = id;
    resultadoParsed.push(user);

    const dataToSave = await JSON.stringify(resultadoParsed);

    await fs.promises.writeFile(this.#pathData, dataToSave);
  };

  consultarEventos = async () => {
    const resultadoParsed = await this.#lerArquivo();
    return resultadoParsed;
  };

  updateEvent = async (dataToUpdate, id) => {
    const resultadoParsed = await this.#lerArquivo();

    const userFound = resultadoParsed.filter((user) => user.name === name);
    return userFound;
  };

  criarEvento = async (event) => {
    const resultadoParsed = await this.#lerArquivo();
    const id = resultadoParsed.at(-1).id + 1;
    event.id = id;
    resultadoParsed.push(event);

    const dataToSave = await JSON.stringify(resultadoParsed);

    await fs.promises.writeFile(this.#pathData, dataToSave);
  };
}

const managerUsers = new ManagerUsers();

const managerTickets = new TicketManager();

const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname + "/public"));

app.get(
  "/usuarios",
  (req, res, next) => {
    console.log(`${new Date()} - Rota: ${req.route.path} - Método: ${req.route.stack[0].method}`)
  next()
  },
  async (req, res) => {
    try {
      const usuarios = await managerUsers.consultarUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Erro ao consultar usuários." });
    }
  }
);

app.get("/eventos", async (req, res) => {
  try {
    const usuarios = await managerTickets.consultarEventos();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao consultar eventos." });
  }
});

app.post("/usuarios", async (req, res) => {
  const user = req.body;
  try {
    await managerUsers.criarUsuario(user);
    res.status(201).json({ message: "Usuario cadastrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao cadastrar usuários." });
  }
});

app.post("/eventos", async (req, res) => {
  const event = req.body;
  try {
    await managerTickets.criarEvento(event);
    res.status(201).json({ message: "Evento cadastrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao cadastrar evento." });
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
