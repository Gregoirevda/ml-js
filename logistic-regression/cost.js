/*
* For classification, we will use a penalization technique
*
* if y = 1, Cost of hØ(x) should be 1
* if y = 0, Cost of hØ(x) should be 0
*
* If y = 1, we will penalize the function exponentially if it diverges from 1
* if y = 0, we will penalize the function exponentially if it diverges from 0
*
* No local optimum problem, there's only one global optimum
*
* */

const {hypothesis} = require('./hypothesis');

exports.penalize = (predictedY, y) => {
  if(y === 1) {
    return -Math.log(predictedY)
  } else if (y === 0) {
    return -Math.log(1-predictedY)
  } else {
    throw new Error('Cost function error: predicted Y is nor 1 nor 0');
  }
};

exports.cost = (trainingSet, thetas) =>
  1/trainingSet.length * trainingSet.reduce((acc, {x, y}) =>
    acc + penalize(hypothesis(x, thetas), y)
  , 0);


exports.costDerivative = (trainingSet, thetas, thetaIndex) =>
  1/trainingSet.length * trainingSet.reduce((acc, {x, y}, rowIndex) =>
      acc + (hypothesis(x, thetas) - y) * trainingSet[rowIndex].x[thetaIndex]
  , 0);
