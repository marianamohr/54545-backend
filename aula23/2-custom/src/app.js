const express = require('express');
const GeralRouter = require('./routers/geral.route');

const app = express();

const geralRouter = new GeralRouter()
app.use("/", geralRouter.getRouter())

module.exports = app;