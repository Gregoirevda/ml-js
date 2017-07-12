const logisticRegressionHypothesis = require('../logistic-regression/hypothesis').hypothesis;

exports.neuron = (previousLayerVariables, previousLayerThetas) => {
  return logisticRegressionHypothesis(previousLayerVariables, previousLayerThetas)
};