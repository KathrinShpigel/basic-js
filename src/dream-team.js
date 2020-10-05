const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  return Array.isArray(arr) ? arr
    .filter(el => {
      return typeof el === 'string'
    })
    .map(el =>  {
      return el !== '' ? el.trim().charAt(0).toUpperCase() : ''
    })
    .sort()
    .join('')
    : false;
};
