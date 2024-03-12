const express = require("express");
const userService = require("../service/users.service");
const userValidation = require("../middlewares/userValidation");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json({ message: users });
});

router.post("/", userValidation, async (req, res) => {
  const user = req.body;
  const userCreated = await userService.createUser(user);
  return res.render("userCreated", { name: userCreated.first_name });
});

router.delete("/:email", async (req, res) => {
    const {email} = req.params;
    console.log(email);
    const userCreated = await userService.deleteUser(email);
    return res.render("userDeleted", { email });
  });

  router.put("/:uid", userValidation, async (req, res) => {
    try {
      const user = req.body;
      const { uid } = req.params;

      const newUser = await userService.updateUser(user, uid);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
