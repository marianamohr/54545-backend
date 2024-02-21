const express = require("express");

const router = express.Router();


router.get("/", (_req, res) => {
 
  res.render("index", {});
});

module.exports = router;