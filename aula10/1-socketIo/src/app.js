const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const pathView = path.join(`${__dirname}/views`);
const viewsRouter = require("./routes/views.router");

const socketIO = require("socket.io");

const http = require("http");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);
const io = socketIO(server);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

const staticPath = path.join(`${__dirname}/public`);

app.use("/static", express.static(staticPath));

app.use("/views", viewsRouter);

io.on("connection", (socket) => {
  console.log("Usuário conectado");
  socket.on("message", (data) => {
    console.log(data);
  });

  socket.emit(
    "event_individual",
    "esta mensagem deve ser recebida pelo soccket"
  );
  socket.broadcast.emit("hello", "world");
});

module.exports = server;
