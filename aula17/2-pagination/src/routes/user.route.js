const express = require("express");
const userService = require("../service/users.service");

const router = express.Router();

router.get("/:nome/:page", async (req, res) => {
  const {nome, page} = req.params;
 
  console.log(page)

  const users = await userService.getUsers(nome,page);
  
  return res.status(200).json({ message: users });
});



module.exports = router;
