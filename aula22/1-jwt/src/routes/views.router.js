const express = require("express");
const userService = require("../service/user.service");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/home", (req, res) => {

  res.render("index");
});



module.exports = router;
