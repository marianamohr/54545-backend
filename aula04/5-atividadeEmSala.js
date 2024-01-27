const fs = require("fs");

const data = JSON.stringify(new Date())
fs.writeFile("./data/dataHora.txt", data, (err) => {
  if (err) {
    return console.log("Errouuuu");
  }

  fs.readFile("./data/dataHora.txt", "utf-8", (err, resultado) => {
    if (err) {
      return console.log("Errouuuu");
    }
    console.log(resultado);
  });
});
