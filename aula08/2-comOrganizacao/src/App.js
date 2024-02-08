const express = require("express");
const path = require('path');

const userRouter = require("./routes/users.routes")
const ticketRouter = require("./routes/event.routes")


const app = express();
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const staticPath = path.join(`${__dirname}/../public`)

app.use("/static",express.static(staticPath));



app.use("/usuarios", userRouter)
app.use("/eventos", ticketRouter)

module.exports = app;
