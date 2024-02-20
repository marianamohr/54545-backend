const express = require("express");

const router = express.Router();

const food = [
  { name: "Burgão", price: 10 },
  { name: "hotdog", price: 15 },
  { name: "Risoto", price: 40 },
  { name: "Pasta", price: 35 },
];

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/list", (req, res) => {
  const users = [
    { name: "Mari", lastName: "Mohr" },
    { name: "Gui", lastName: "Salzer" },
  ];
  res.render("list", { users });
});

router.get("/listProducts", (req, res) => {
  const users = [
    { name: "Gui", lastName: "Salzer", role: "admin" },
    { name: "Ana", lastName: "Santos", role: "user" },
    { name: "Clara", lastName: "Martins", role: "admin" },
    { name: "Mari", lastName: "Mohr", role: "user" },
    { name: "Italo", lastName: "Menegatti", role: "admin" },
  ];
  const index = Math.floor(Math.random() * 4);

  const user = users[index]
  res.render("products", { user, isAdmin: user.role === "admin", food });
});

router.get("/", (req, res) => {
  const user = { name: "Gui", lastName: "Salzer", role: "admin" };
  res.render("index", user);
});

router.get("/random", (req, res) => {
  const users = [
    { name: "Gui", lastName: "Salzer", role: "admin" },
    { name: "Ana", lastName: "Santos", role: "user" },
    { name: "Clara", lastName: "Martins", role: "admin" },
    { name: "Mari", lastName: "Mohr", role: "user" },
    { name: "Italo", lastName: "Menegatti", role: "admin" },
  ];
  const number = Math.floor(Math.random() * 4);
  console.log(number)
  res.render("random", users[number]);
});

module.exports = router;
