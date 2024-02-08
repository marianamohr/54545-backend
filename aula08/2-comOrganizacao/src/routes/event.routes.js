const express = require("express");


const ticketRouter = express.Router();

const eventController = require("../controllers/event.controller")
ticketRouter.get("/", eventController.getAll);

ticketRouter.post("/", eventController.create);

module.exports = ticketRouter;
