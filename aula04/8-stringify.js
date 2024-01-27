const fs = require("fs");

const operacoesAsync = async () => {
  try {
    let resultado = await fs.promises.readFile("./data/data.json", "utf-8");
    const resultadoParsed = JSON.parse(resultado);

    const newUser = {
      id: 4,
      name: "Rony Wesley",
      cidade: "Ottery St. Catchpole",
      pais: "UK",
    };
    resultadoParsed.push(newUser);

    const dataToSave = JSON.stringify(resultadoParsed);

    await fs.promises.writeFile("./data/data.json", dataToSave);
  } catch (error) {
    console.log("Error", error);
  }
};

operacoesAsync();
