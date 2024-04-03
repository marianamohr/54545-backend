const express = require("express");
const userService = require("../service/user.service");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  res.render("login");
});
module.exports = router;
