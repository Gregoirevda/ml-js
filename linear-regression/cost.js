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

const {hypothesisWithOneVariable, hypothesis} = require('./hypothesis');

exports.cost = (trainingSet, thetaZero, thetaOne) =>
  1/2 * trainingSet.length *
  Math.pow(
    trainingSet.reduce((acc, {x, y}) =>
      acc + hypothesisWithOneVariable(x, thetaZero, thetaOne) - y
    ,0)
  ,2);

exports.costDerivativeWithOneVariable = (trainingSet, thetaZero, thetaOne) => {
  return 1/trainingSet.length * trainingSet.reduce((acc, {x, y}) =>
      acc + ((hypothesisWithOneVariable(x, thetaZero, thetaOne) - y) * x)
  , 0)
};

exports.costDerivativeTheta0 = (trainingSet, thetaZero, thetaOne) => {
  return 1/trainingSet.length * trainingSet.reduce((acc, {x, y}) =>
      acc + (hypothesisWithOneVariable(x, thetaZero, thetaOne) - y)
      , 0)
};

exports.costDerivative = (trainingSet, thetas, thetaIndex) => {
  return 1/trainingSet.length * trainingSet.reduce((acc, {x, y}, rowIndex) =>
    acc + (hypothesis(x, thetas) - y) * trainingSet[rowIndex].x[thetaIndex]
  , 0);
};