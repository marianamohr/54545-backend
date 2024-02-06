const fs = require("fs");

class ManagerUsers {
  #pathData = `${__dirname}/../data/users.json`;
  constructor() {}

  #lerArquivo = async () => {
    let resultado = await fs.promises.readFile(this.#pathData, "utf-8");
    const resultadoParsed = await JSON.parse(resultado);
    return resultadoParsed;
  };

  #gravarArquivo = async (data) => {
    await fs.promises.writeFile(this.#pathData, JSON.stringify(data));
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
    const index = resultadoParsed.findIndex((user) =>  user.id === +id)
    
    const newUser = {id: +id, ...dataToUpdate}
   
    resultadoParsed[index] = newUser;
   await this.#gravarArquivo(resultadoParsed)
    return resultadoParsed[index];
  };

  deleteUser = async (id) => {
    const resultadoParsed = await this.#lerArquivo();
    const currentLength = resultadoParsed.length
    const users = resultadoParsed.filter((user) => user.id !== +id )
    if (currentLength === users.length) {
      return false
    }

    
   await this.#gravarArquivo(users)
    return true
  };
}

module.exports = ManagerUsers;
