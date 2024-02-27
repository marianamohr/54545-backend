const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
 
  res.render("index", {});
});

router.get("/teste", (req, res) => {
 
  res.render("teste", {});
});

module.exports = router;