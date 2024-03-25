const express = require("express");
const userService = require("../service/users.service");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});



router.get("/list", async (req, res) => {
  const users = await userService.getUsers('', 0);
  res.render("list", { users });  
});
  


module.exports = router;
