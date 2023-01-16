const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const PORT = 3000;

// app.use(
//   fileUpload({
//     limits: {
//       fileSize: 10000000,
//     },
//     abortOnLimit: true,
//   })
// );

// // Add this line to serve our index.html page
// app.use(express.static("public"));

var app = express();

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use(cors());

app.get("/receitas", (req, res) => {
  res.send(lerArquivo());
});

app.post("/upload", (req, res) => {
  // Get the file that was set to our field named "image"
  const { image } = req.files;

  // If no image submitted, exit
  if (!image) return res.sendStatus(400);

  // If does not have image mime type prevent from uploading
  //  if (/^image/.test(image.mimetype)) return res.sendStatus(400);

  // Move the uploaded image to our upload folder
  image.mv(__dirname + "/upload/" + image.name);

  // All good
  res.sendStatus(200);
});

function lerArquivo() {
  return JSON.parse(fs.readFileSync("./data/recipes.json"));
}
