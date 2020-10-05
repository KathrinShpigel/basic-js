const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr ? (arr.flat(Infinity).filter(el => el === '^^')).length : 0;
};
