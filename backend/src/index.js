const express = require("express");

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
  res.send("Server on");
});

app.listen(PORT, HOST);
