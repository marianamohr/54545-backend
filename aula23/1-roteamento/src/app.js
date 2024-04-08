const express = require('express');
const geralRouter = require('./routers/geral.route');

const app = express();


app.use("/", geralRouter)

module.exports = app;