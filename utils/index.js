exports.greaterOrLessThen = (value, checkValue, diff) =>
  Math.abs(value - checkValue) < diff;

exports.toNotRounded2Dec = (num) => num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
