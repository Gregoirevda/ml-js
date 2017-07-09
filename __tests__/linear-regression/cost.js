const {cost} = require('../../linear-regression/cost');

describe('Cost', () => {
  it('Should give the correct cost of a training set with no slope and zero as starting point', () => {
    const trainingSet = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
      ],
      thetaZero = 0,
      thetaOne = 0;

    expect(cost(trainingSet, thetaZero, thetaOne)).toBe(0);
  });

  it('Should give the correct cost of a training set with no slope and positive starting point', () => {
    const trainingSet = [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
        { x: 2, y: 1 },
        { x: 3, y: 1 },
      ],
      thetaZero = 1,
      thetaOne = 0;

    expect(cost(trainingSet, thetaZero, thetaOne)).toBe(0);
  });

  it('Should give the correct cost of a training set with no slope and negative starting point', () => {
    const trainingSet = [
        { x: 0, y: -1 },
        { x: 1, y: -1 },
        { x: 2, y: -1 },
        { x: 3, y: -1 },
      ],
      thetaZero = -1,
      thetaOne = 0;

    expect(cost(trainingSet, thetaZero, thetaOne)).toBe(0);
  });


  it('Should give the correct cost of a training set with positive slope and zero as starting point', () => {
    const trainingSet = [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 },
      ],
      thetaZero = 0,
      thetaOne = 1;

    expect(cost(trainingSet, thetaZero, thetaOne)).toBe(0);
  });

  it('Should give the correct cost of a training set with positive slope and positive starting point', () => {
    const trainingSet = [
        { x: 0, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 4 },
      ],
      thetaZero = 1,
      thetaOne = 1;

    expect(cost(trainingSet, thetaZero, thetaOne)).toBe(0);
  });

  it('Should give the correct cost of a training set with positive slope and negative starting point', () => {
    const trainingSet = [
        { x: 0, y: -1 },
        { x: 1, y: 0 },
        { x: 2, y: 1 },
        { x: 3, y: 2 },
      ],
      thetaZero = -1,
      thetaOne = 1;

    expect(cost(trainingSet, thetaZero, thetaOne)).toBe(0);
  });

  it('Should give the correct cost of a training set with negative slope and zero starting point', () => {
    const trainingSet = [
        { x: 0, y: 0 },
        { x: 1, y: -1 },
        { x: 2, y: -2 },
        { x: 3, y: -3 },
      ],
      thetaZero = 0,
      thetaOne = -1;

    expect(cost(trainingSet, thetaZero, thetaOne)).toBe(0);
  });

  it('Should give the correct cost of a training set with negative slope and negative starting point', () => {
    const trainingSet = [
        { x: 0, y: -1 },
        { x: 1, y: -2 },
        { x: 2, y: -3 },
        { x: 3, y: -4 },
      ],
      thetaZero = -1,
      thetaOne = -1;

    expect(cost(trainingSet, thetaZero, thetaOne)).toBe(0);
  });

  it('Should give the correct cost of a training set with negative slope and positive starting point', () => {
    const trainingSet = [
        { x: 0, y: 1 },
        { x: 1, y: 0 },
        { x: 2, y: -1 },
        { x: 3, y: -2 },
      ],
      thetaZero = 1,
      thetaOne = -1;

    expect(cost(trainingSet, thetaZero, thetaOne)).toBe(0);
  });
});