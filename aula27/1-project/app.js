const express = require("express");
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

app.get("/test", (req, res) => {
  return res.send({message: "resposta"});
});

app.listen(8080, () => console.log("Mae tá on"));
