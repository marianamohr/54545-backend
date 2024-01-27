const fs = require("fs");

const operacoesAsync = async () => {
  try {
    await fs.promises.writeFile("./data/exemploPromessa.txt", "Hello Coders! Virei um arquivo!");
    let resultado = await fs.promises.readFile("./data/exemploPromessa.txt", "utf-8");
    console.log(resultado);
    await fs.promises.appendFile("./data/exemploPromessa.txt", " Mais conteúdo! ");
    resultado = await fs.promises.readFile("./data/exemploPromessa.txt", "utf-8");
    console.log(resultado);
  } catch (error) {
    console.log("Error", error);
  }
};

operacoesAsync();