const express = require("express");
const pokerService = require("../service/PokerService");

const PokerRouter = express.Router();

PokerRouter.route("/check-hand").post((req, res) => {
  console.log(req.body);

  var hand1 = req.body.hand1;
  var hand2 = req.body.hand2;

  var response = res.setHeader("Content-Type", "application/json");
  response = pokerService.getHandWinner(hand1, hand2);

  res.send(response);
});

module.exports = PokerRouter;
