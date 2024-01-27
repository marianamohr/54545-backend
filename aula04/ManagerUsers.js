const fs = require("fs");

class ManagerUsers {
  #pathData = "./data/users.json";
  constructor() {}

  #lerArquivo = async () => {
    let resultado = await fs.promises.readFile(this.#pathData, "utf-8");
    const resultadoParsed = await JSON.parse(resultado);
    return resultadoParsed;
  };
  criarUsuario = async (name, sobrenome, idade, curso) => {
    const resultadoParsed = await this.#lerArquivo();
    const user = {
      name,
      sobrenome,
      idade,
      curso,
    };
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
}

main = async () => {
  const userManager = new ManagerUsers();

  await userManager.criarUsuario("Mari", "Mohr", 34, "Backend");
  const lista = await userManager.consultarUsuarios();
  
  await userManager.criarUsuario("Gui", "Salzer", 31, "Backend");

  const user = await userManager.consultaByName("Gui");
  console.log(user);
};

main();
