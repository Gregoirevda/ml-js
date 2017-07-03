const {gradientDescent} = require('../gradientDescent');
const {toNotRounded2Dec} = require('../utils');

describe.only('Gradient descent', () => {
  test("Should give the correct thetas of a training set with no slope and zero as starting point", () => {
    const trainingSet = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
      ];

      //Start with a wrong Ø0 and Ø1
      const thetaZero = 10,
      thetaOne = 10;

    expect(gradientDescent(trainingSet, .003, thetaZero, thetaOne)).toEqual([0, 0]);
  });

  test("Should give the correct theta's of a training set with no slope and positive starting point", () => {
    const trainingSet = [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
        { x: 3, y: 1 },
      ],
      thetaZero = 10,
      thetaOne = 10;

    expect(gradientDescent(trainingSet, .003, thetaZero, thetaOne)).toEqual([1, 0]);
  });

  test("Should give the correct theta's of a training set with no slope and negative starting point", () => {
    const trainingSet = [
        { x: 0, y: -1 },
        { x: 1, y: -1 },
        { x: 2, y: -1 },
        { x: 3, y: -1 },
      ],
      thetaZero = 10,
      thetaOne = 10;

    expect(gradientDescent(trainingSet, .003, thetaZero, thetaOne)).toEqual([-1, 0]);
  });


  test("Should give the correct theta's of a training set with positive slope and zero as starting point", () => {
    const trainingSet = [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
      ],
      thetaZero = 10,
      thetaOne = 10;

    expect(gradientDescent(trainingSet, .003, thetaZero, thetaOne)).toEqual([0, 1]);
  });

  test("Should give the correct theta's of a training set with positive slope and positive starting point", () => {
    const trainingSet = [
        { x: 0, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
      ],
      thetaZero = 10,
      thetaOne = 10;

    expect(gradientDescent(trainingSet, .003, thetaZero, thetaOne)).toEqual([1, 1]);
  });

  test("Should give the correct theta's of a training set with positive slope and negative starting point", () => {
    const trainingSet = [
        { x: 0, y: -1 },
        { x: 1, y: 0 },
        { x: 2, y: 1 },
        { x: 3, y: 2 },
      ],
      thetaZero = 10,
      thetaOne = 10;

    expect(gradientDescent(trainingSet, .003, thetaZero, thetaOne)).toEqual([-1, 1]);
  });

  test("Should give the correct theta's of a training set with negative slope and zero starting point", () => {
    const trainingSet = [
        { x: 0, y: 0 },
        { x: 1, y: -1 },
        { x: 2, y: -2 },
        { x: 3, y: -3 },
      ],
      thetaZero = 10,
      thetaOne = 10;

    expect(gradientDescent(trainingSet, .003, thetaZero, thetaOne)).toEqual([0, -1]);
  });

  test("Should give the correct theta's of a training set with negative slope and negative starting point", () => {
    const trainingSet = [
        { x: 0, y: -1 },
        { x: 1, y: -2 },
        { x: 2, y: -3 },
        { x: 3, y: -4 },
      ],
      thetaZero = 10,
      thetaOne = 10;

    expect(gradientDescent(trainingSet, .003, thetaZero, thetaOne)).toEqual([-1, -1]);
  });

  test("Should give the correct theta's of a training set with negative slope and positive starting point", () => {
    const trainingSet = [
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 2, y: -1 },
        { x: 3, y: -2 },
      ],
      thetaZero = 10,
      thetaOne = 10;

    expect(gradientDescent(trainingSet, .003, thetaZero, thetaOne)).toEqual([1, -1]);
  });
});