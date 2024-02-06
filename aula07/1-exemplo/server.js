const app = require("./src/App");

const port = 8080;
app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
  });