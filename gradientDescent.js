/**
 * Minimize the cost function.
 * Gradient descent can be used with more than 2 params => J(Ø0, Ø1, Ø2,...)
 *
 * How it works:
 *
 * Starting from a position,
 * finds out the descending direction.
 * Take one step in that direction and again finds out descending direction.
 * It can also bring us in other directions. See starting point y (Only if more than 1 variable)
 *
 * ---                    --x2---x1----y1--y2                                                    ----
 *    \         x4---x3--/                   \--y3- (this was not the most minimized cost fn)--/
 *     \       /
 *      ----x5- (lowest minimized cost fn)
 *
 *
 * The function is basically a loop and when there's a lot of convergence you stop. [J(Øx-1) === J(Øx)]
 * You need to give the gradient descent a learning rate.
 * Be careful on the learning rate:
 * if too slow it will converge slowly,
 * if too high it will jump too far away. Example:
 *
 * --                  ---x4 (learning rate was way too high.
 *   \x3              /      It will fall into the bucket on next step, but will go up again after)
 *    \             /x2
 *     \x1        /
 *      \------/
 *
 *
 **/

import {greaterOrLessThen} from './utils/index';
const costDerivative = require('./cost').costDerivative;

exports.gradientDescent = (trainingSet, learningRate, thetaZero, thetaOne) => {
  //Important! theta's have to be updated at the same time,
  // because the costFn needs to be calculated on the same thetas.
  // (Don't assign and use for next).
  let tempThetaZero, tempThetaOne;
  while(true) {
    tempThetaZero = thetaZero - learningRate * (costDerivative(trainingSet, thetaZero, thetaOne));
    tempThetaOne = thetaOne - learningRate * (costDerivative(trainingSet, thetaZero, thetaOne));

    // If previous theta and new calculated theta are close
    if(
      greaterOrLessThen(thetaZero, tempThetaZero, 2) &&
      greaterOrLessThen(thetaOne, tempThetaOne, 2)
    ) {
      break;
    }
    //Only here we can update all theta's
    thetaZero = tempThetaZero;
    thetaOne = tempThetaOne;
  }

  return [tempThetaZero, tempThetaOne];
};
