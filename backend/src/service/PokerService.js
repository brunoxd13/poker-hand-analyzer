const poker = require("pokersolver").Hand;

class PokerService {
  getHandWinner(hand1, hand2) {
    hand1 = poker.solve(hand1);
    hand2 = poker.solve(hand2);

    const winner = poker.winners([hand1, hand2]);

    console.log(winner);

    return winner === hand1 ? 1 : 2;
  }

  getDescriptionHand(hand) {
    hand = poker.solve(hand);
    return hand.descr;
  }
}

module.exports = new PokerService();
