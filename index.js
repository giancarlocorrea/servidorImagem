const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const fs = require("fs");
require("dotenv").config();
const PORT = process.env.PORT || 8001;

var app = express();

function lerArquivo() {
  return JSON.parse(fs.readFileSync("./data/recipes.json"));
}

app.use(express.json());
app.use(cors());

app.get("/receitas", (req, res) => {
  res.send(lerArquivo());
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on port ${PORT}`);
});
