const express = require("express");
const userService = require("../service/user.service");
const userValidation = require("../middlewares/userValidation");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await userService.getUsers();
  console.log(users);
  res.status(200).json(users);
});

router.post("/", async (req, res) => {
  try {
    const user = req.body;
    const users = await userService.createUser(user);
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: `Internal Error ${error.message}` });
  }
});

router.delete("/:uid", async (req, res) => {
  const { uid } = req.params;

  const user = await userService.deleteUser(uid);
  console.log(user);
  res.status(204).send();
});

router.put("/:uid", userValidation, async (req, res) => {
  try {
    const user = req.body;
    const { uid } = req.params;
    const users = await userService.updateUser(user, uid);
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: `Internal Error ${error.message}` });
  }
});

module.exports = router;
