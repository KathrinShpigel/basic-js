const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const manage = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];
  const result = [];

  if (!Array.isArray(arr)) throw "Error";
  if (!arr.length) return [];
  if ((arr.filter(el => !manage.includes(el)).length === arr.length)) return arr;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    switch (el) {
      case manage[0]:
        i++; 
        break;
      case manage[1]:
        result.length && arr[i-2] !== manage[0] ? result.pop() : 0;
        break;
      case manage[2]:
        i < arr.length - 1 ? result.push(arr[i+1]) : 0;
        break;
      case manage[3]:
        i !== 0 && arr[i - 2] !== manage[0] ? result.push(arr[i-1]) : 0;
        break;
      default:
        result.push(el);
    }
  }
  return result;
};
