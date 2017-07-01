
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
 * H     = 0  + 0 * x
 *  0(x)    o    1
 * h subscript teta of x = teta zero + teta one of x
 *
 * or
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


export const hypothesis = (x/*input*/, a/*y intercept*/, b/*slope*/) => a + b*x;