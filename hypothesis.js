
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
 * h subscript teta of x = teta zero + teta one of x
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
 * Choose teta zero(a) and teta one(b) so that the predicated value h(x) is the closest to y
 *
 * How:
 * Minimize teta zero and teta one -> (h(x) - y)2 == 0
 * This is what the cost function does : cost.js
 **/

/**
 * @param x: input
 * @param a: y intercept (y position on x = 0)
 * @param b: slope (∆y on ∆x = 1)
 */
export const hypothesis = (x, a, b) => a + b*x;