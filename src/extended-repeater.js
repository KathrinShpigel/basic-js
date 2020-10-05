const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1, separator = '+', addition = '',
                                  additionRepeatTimes = 1, additionSeparator = '|'}) {
  
  str === null ? str = 'null' : str = str.toString();
  addition === null ? addition = 'null' : addition = addition.toString();
  
  const result = [];
  const subResult = [];
  
  while (additionRepeatTimes > 0) {
    subResult.push(addition);
    additionRepeatTimes--;
  }

  const dublicator = str + subResult.join(additionSeparator);
  
  while (repeatTimes) {
    result.push(dublicator);
    repeatTimes--;
  }
  
  return result.join(separator);
};