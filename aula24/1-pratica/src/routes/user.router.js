const express = require("express");
const validationUser = require("../middlewares/user.middleware");
const userService = require("../service/user.service");
const { isValidatePassword, createHash } = require("../utils/index");
const passport = require("passport");

const passportCall = require("../utils/passport.utils");
isValidatePassword;
const router = express.Router();

router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/user/faillogin" }),
  async (req, res) => {
    console.log("to no login rota", req.user);
    if (!req.user)
      return res.status(400).json({ status: "error", message: "Unauthorized" });
    
    const user = {
      first_name: req.user.first_name,
      last_name: req.user.last_name,
      email: req.user.email,
      role: req.user.role,
      token: req.user.token,
    };
    req.session.user = user;
    return res
      .cookie("accessToken", req.user.token)
      .redirect("/home");
  }
);

router.get("/faillogin", (req, res) => {
  console.log("faliled Strategy");
  res.render("loginFail");
});

router.post(
  "/register",
 passportCall("jwt"),
  async (req, res) => {
    const user = req.body;
    const newUser = await userService.createUser(user);
    res.render("userCreated", { name: newUser.first_name });
  }
);

router.get("/failregister", (req, res) => {
  console.log("faliled Strategy");
  res.send("Erro ao registrar");
});

router.delete("/:email", async (req, res) => {
  const { email } = req.params;
  const user = await userService.deleteUser(email);
  res.render("userDeletado", { email });
});

router.put("/:uid", validationUser, async (req, res) => {
  try {
    console.log("to no PUT");
    const user = req.body;
    const { uid } = req.params;
    console.log(uid);
    const newUser = await userService.updateUser(user, uid);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("accessToken");
  res.redirect("/");
});


module.exports = router;
