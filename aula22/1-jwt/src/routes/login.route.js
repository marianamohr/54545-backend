const express = require("express");
const { generateToken, authToken } = require("../utils");
const userService = require("../service/user.service");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await userService.getUsersByEmail(email);
  user = user.map((u) => u.toJSON());
  user = user[0];
  console.log("USER", user);
  if (!user) {
    return res
      .status(400)
      .send({ status: "error", error: "Invalid credentials" });
  }
  if (user.password !== password) {
    return res
      .status(400)
      .send({ status: "error", error: "Invalid credentials" });
  }
  delete user.password;
  const accessToken = generateToken(user);
  return res
    .cookie("accessToken", accessToken, { httpOnly: true, maxAge: 1000 * 60 * 60})
    .redirect("/home");
});

router.get("/current", authToken, (req, res) => {
  console.log("VVVVV", req.user);
  return res.status(200).send({ status: "success", user: req.user });
});

module.exports = router;
