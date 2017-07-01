/**
 *
 * Cost function is the sum of the differences between y and predicted y [h(x)]
 * (
 * This function will square the error since it will accumulate all errors;
 *  If you plot the cost function of a small difference on Ø0 and Ø1,
 *  you will see the cost function grow exponentially
 * )
 * If the cost function === 0 => the hypothesis of x === y
 * */

const hypothesis = require('./hypothesis');

export const cost = (trainingSet, thetaZero, thetaOne) =>
  1/2 *
  Math.pow(
    trainingSet.reduce(({x, y}) =>
      hypothesis(x, thetaZero, thetaOne) - y
    ,0)
  ,2);