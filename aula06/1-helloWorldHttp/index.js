const http = require("http");

const server = http.createServer((_request, response) => {
  response.end("Meu primeiro hello World do backend!");
});

server.listen(8080, () => {
  console.log("Server up on port 8080");
});
