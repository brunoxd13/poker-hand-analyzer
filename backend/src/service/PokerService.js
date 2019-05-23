const poker = require("poker-hands");

class PokerService {
  getHandWinner(hand1, hand2) {
    var result = poker.judgeWinner([hand1, hand2]);
    console.log(result);
    return result;
  }
}

module.exports = new PokerService();
