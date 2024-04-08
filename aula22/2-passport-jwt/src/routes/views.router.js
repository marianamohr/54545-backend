const express = require("express");
const userService = require("../service/user.service");
const passport = require("passport");
const passportCall = require("../utils/passport.utils");


const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get(
  "/home",
  passport.authenticate("jwt", { session: false }),
 // passportCall("jwt"),
  (req, res) => {
    res.render("index");
  }
);

module.exports = router;
