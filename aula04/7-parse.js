const fs = require("fs");

const operacoesAsync = async () => {
  try {
   
   let  resultado = await fs.promises.readFile("./data/data.json", "utf-8");
   const resultadoParsed = JSON.parse(resultado)
    console.log(resultadoParsed);
   

  } catch (error) {
    console.log("Error", error);
  }
};

operacoesAsync();