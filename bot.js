const  possibleMoves = ["R", "P", "S"];

class Bot {
  constructor() {
    this.dynamiteUsed = 0;
  }

  makeMove(gamestate) {
    if (gamestate.rounds.length === 0) {
      return this.generateRandomMove();
    }

    const lastRoundPlayed = gamestate.rounds.slice(-1)[0];

    if (lastRoundPlayed.p1 === lastRoundPlayed.p2 && this.dynamiteUsed < 100) {
      this.dynamiteUsed++;
      return "D";
    }
    if (lastRoundPlayed.p1 === lastRoundPlayed.p2 && this.dynamiteUsed >= 100) {
      return "W";
    }

    const possibleFilteredMoves = possibleMoves.filter(
      (move) => lastRoundPlayed.p1 !== move
    );
    const nextMove =
      possibleFilteredMoves[
        Math.floor(Math.random() * possibleFilteredMoves.length)
      ];

    return nextMove;
  }

  generateRandomMove() {
    const move = possibleMoves[
      Math.floor(Math.random() * possibleMoves.length)
    ];
    return move;
  }
}
module.exports = new Bot();
