const express = require("express");
var bodyParser = require("body-parser");

const app = (module.exports = express());

const PORT = process.env.PORT || 3001;
const HOST = "0.0.0.0";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, HOST, () => {
  console.log("Server is running on PORT:", PORT);
});
