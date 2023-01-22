const express = require("express");
const router = express.Router();
const fs = require("fs");

function lerArquivo() {
  return JSON.parse(fs.readFileSync("./data/recipes.json"));
}

// app.get("/receitas", (req, res) => {
//   res.send(lerArquivo());
// });

router.get("/receitas", async (req, res, next) => {
  res.send(lerArquivo());
});

module.exports = router;
