const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const home = require("./routes/home");

require("dotenv").config();
const PORT = process.env.PORT || 8001;

var app = express();

app.use(express.json());
app.use(cors());

app.use("/home", home);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on port ${PORT}`);
});
