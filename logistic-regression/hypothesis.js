/*
* For classification, linear regression is not a good solution because:
*
* - the y can be from -∞ to +∞ (Out put should be 0 or 1 for binary classification
*   or mutiple concrete values for multiclass classification)
* - One dataset can falsify the whole linear regression
*
* Logistic regression output is bewteen 0 and 1
*
* sigmoïd function applied on Z, will output number between 0 and 1.
* When Z = 0 => g(Z) = 0.5
* g(Z) = 1/(1+e^-Z)
*
* applied to previous linear regression hypothesis:
* g(ØT*x) = 1/(1+e^-(ØT*x))
*
* is our new hypothesis:
* h    = 1/(1+e^-(ØT*x))
*  Ø(x)
*
* If h Ø(x) >= 0.5 => 1
* if h Ø(x) < 0.5 => 0
*
* Because when Z = 0, g(Z) = 0.5 we can simplify by
* if Z >= 0 => 1
* if Z < 0 => 0
* */

const linearRegressionHypothesis = require('../linear-regression/hypothesis').hypothesis;

exports.hypothesis = (variables, thetas) =>
  1/(1+Math.pow(Math.E, -linearRegressionHypothesis(variables, thetas)));
