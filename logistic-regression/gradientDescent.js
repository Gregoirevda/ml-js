const {costDerivative} = require('./cost');

exports.gradientDescent = (trainingSet, learningRate, thetas) => {
  //Important! theta's have to be updated at the same time,
  // because the costFn needs to be calculated on the same thetas.
  // (Don't assign and use for next).
  let tempThetas = [];
  while(true) {
    tempThetas = thetas
      .map((theta, index) => {
        return theta - learningRate * (costDerivative(trainingSet, thetas, index))
      });
    // If previous theta and new calculated theta are converging
    if(tempThetas
        .every((tempTheta, index) => tempTheta.toFixed(4) === thetas[index].toFixed(4))) {
      break;
    }
    //Only here we can update all theta's
    thetas = [...tempThetas];
  }
  //ParseInt around Math.round, because parseInt will transform -0 to 0.
  return tempThetas
    .map(tempTheta => parseInt(Math.round(tempTheta)));
};