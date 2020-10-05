const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let count = 1;
  disksNumber = Number(disksNumber);
  turnsSpeed = Number(turnsSpeed);

  function calcMoves(num) {
    if (num <= 0) {
      return 'Please enter a positive number';
    } else if (num === 1) {
      return count;
    } else {
      return (calcMoves(num - 1) * 2 + 1);
    }
  }

  const turns = calcMoves(disksNumber);
  const seconds = Math.floor((turns / (turnsSpeed / 60 / 60)));

  return { turns, seconds };
};
