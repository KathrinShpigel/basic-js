const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  return typeof(sampleActivity) !== 'string' ||
      Number(sampleActivity) <= 0 ||
      Number(sampleActivity) > MODERN_ACTIVITY ||
      isFinite(parseFloat(sampleActivity)) === false ?
      false : Math.floor(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));
};
