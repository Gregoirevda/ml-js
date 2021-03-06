/*
 * Hypothesis : Function that maps x to y
 *
 *                                           y
 *                                           ^
 *                                          ||
 * Training set => learning algorithm => hypothesis
 *                                           ^
 *                                          ||
 *                                           x
 * H     = Ø  + Ø * x
 *  Ø(x)    0    1
 * h subscript theta of x = theta zero + theta one of x
 *
 * Different ways to represent h :
 *
 * 1. Linear regression with one variable
 *
 * y = a+bx
 * with
 * a = y intercept
 * b = slope
 *
 * The y intercept and the slope are constant trough a training set
 *
 * The goal:
 * Choose theta zero(a) and theta one(b) so that the predicated value h(x) is the closest to y
 *
 * How:
 * Minimize theta zero and theta one -> (h(x) - y)2 == 0
 * Minimize the cost function (Minimize the difference between y and h(x))
 **/

/**
 * @param x: input
 * @param thetaZero: y intercept (y position on x = 0)
 * @param thetaOne: slope (∆y on ∆x = 1)
 */
exports.hypothesisWithOneVariable = (x, thetaZero, thetaOne) => thetaZero + thetaOne*x;

//Hypothesis with multiple variables
exports.hypothesis = (variables, thetas) => {
  //Should respect the convention that X0 is 1
  if(!variables || !thetas ||
      !Array.isArray(variables) && !Array.isArray(thetas) &&
      variables.length !== thetas.length ||
      variables[0] !== 1
  ) {
    throw new Error("Hypothesis with multiple variables: incorrect parameters");
  }

  return thetas.reduce((acc, theta, index) => {
    return acc + (theta * variables[index])
  }, 0);
};
