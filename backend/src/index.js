const app = require("./AppConfig");
const PokerRouter = require("./routes/PokerRouter");

app.get("/", (req, res) => {
  res.send("Server on");
});

app.use("/poker", PokerRouter);
