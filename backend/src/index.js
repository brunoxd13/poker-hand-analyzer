const app = require("./AppConfig");
const UserRouter = require("./routes/PokerRouter");

app.get("/", (req, res) => {
  res.send("Server on");
});

app.use("/poker", UserRouter);
