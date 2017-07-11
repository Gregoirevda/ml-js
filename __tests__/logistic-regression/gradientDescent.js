const {gradientDescent} = require('../../logistic-regression/gradientDescent');
const {hypothesis} = require('../../logistic-regression/hypothesis');

describe('Gradient descent for logistic regression', () => {

  test("It should calculate theta as 0 when y = 0.5", () => {
    const trainingSet = [
      {x: [1], y: 0.5}
    ];
    const thetas = [10];
    const learningRate = .003;

    // When y = 0.5, the resulting theta (Z) should be 0
    const calculatedThetas = gradientDescent(trainingSet, learningRate, thetas);
    expect(calculatedThetas).toEqual([0]);
    // We prove that the hypothesis of the calculated thetas
    // is equal to the y of the same training set.
    expect(hypothesis(trainingSet[0].x, calculatedThetas)).toBe(trainingSet[0].y)
  });

  test("It should calculate theta as a big number when y = 1", () => {
    const trainingSet = [
      {x: [1], y: 1}
    ];
    const thetas = [10];
    const learningRate = .003;

    // When y = 1, the resulting theta (Z) should be bigger than 0
    const calculatedThetas = gradientDescent(trainingSet, learningRate, thetas);
    expect(calculatedThetas[0]).toBeGreaterThan(0); //Means y = 1
    // We prove that the hypothesis of the calculated thetas
    // is equal to the y of the same training set.
    // y will go to 1, but will never be 1 (0.99999999)
    expect(hypothesis(trainingSet[0].x, calculatedThetas)).toBeCloseTo(trainingSet[0].y)
  });

  test("It should calculate theta as a small number when y = 0", () => {
    const trainingSet = [
      {x: [1], y: 0}
    ];
    const thetas = [10];
    const learningRate = .003;

    // When y = 0, the resulting theta (Z) should be smaller than 0
    const calculatedThetas = gradientDescent(trainingSet, learningRate, thetas);
    expect(calculatedThetas[0]).toBeLessThan(0); //Means y = 0
    // We prove that the hypothesis of the calculated thetas
    // is equal to the y of the same training set.
    // y will go to 0, but will never be 0 (0.000001)
    expect(hypothesis(trainingSet[0].x, calculatedThetas)).toBeCloseTo(trainingSet[0].y, 1)
  });
});