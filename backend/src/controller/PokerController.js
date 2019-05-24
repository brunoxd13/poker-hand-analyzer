const pokerService = require("../service/PokerService");

class PokerController {
  proccesHand(hand1, hand2) {
    const handWinner = pokerService.getHandWinner(hand1, hand2);
    const descrHandOne = pokerService.getDescriptionHand(hand1);
    const descrHandTwo = pokerService.getDescriptionHand(hand2);

    return { handWinner, descrHandOne, descrHandTwo };
  }
}

module.exports = new PokerController();
