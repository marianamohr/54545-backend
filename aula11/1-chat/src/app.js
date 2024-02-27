const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const pathView = path.join(`${__dirname}/views`);
const viewsRouter = require("./routes/views.router.js");
const socketIO = require("socket.io");

const http = require("http");

const app = express();

const server = http.createServer(app);
const io = socketIO(server);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", pathView);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staticPath = path.join(`${__dirname}/public`);

app.use("/static", express.static(staticPath));

app.use("/", viewsRouter);

const messages = [];
io.on("connection", (socket) => {
  console.log("Usuário conectado");
  socket.emit("messages", {});

  socket.on("userName", function (data) {
    console.log(data)
    socket.broadcast.emit('userConnected', data);
  });

  socket.on("message", function (data) {
    console.log(data);
    messages.push(data);
    io.sockets.emit("messageLogs",messages);
  });
});

module.exports = server;
