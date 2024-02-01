const express = require("express");

const app = express();


app.get("/saldar", (_req, res) => {

    return res.status(200).json({message: "Olá Backenders!"})
});

module.exports = app;