const poker = require("poker-hands");
const pokerService = require("../service/PokerService");

class PokerController {
  proccesHand(hand1, hand2) {
    const handWinner = pokerService.getHandWinner(hand1, hand2);
    return { handWinner };
  }
}

module.exports = new PokerController();
