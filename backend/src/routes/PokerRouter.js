const express = require("express");
const pokerController = require("../controller/PokerController");
const utils = require("../Utils");

const PokerRouter = express.Router();

PokerRouter.route("/check-hand").post((req, res) => {
  var hand1 = utils.normalizeDara(req.body.hand1);
  var hand2 = utils.normalizeDara(req.body.hand2);

  var response = res.setHeader("Content-Type", "application/json");
  response = pokerController.proccesHand(hand1, hand2);

  res.send(response);
});

module.exports = PokerRouter;
