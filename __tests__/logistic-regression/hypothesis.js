const {hypothesis} = require('../../logistic-regression/hypothesis');

describe('Hypothesis of the logistic regression', () => {

  test('It should give the correct hypothesis when Z = 0', () => {
    //Should respect that X0 = 1
    const variables = [1];
    const thetas = [0];
    //When Z = 0 => g(Z) = 0.5
    expect(hypothesis(variables, thetas)).toBe(0.5);
  });

  test('It should give the correct hypothesis when Z is very big', () => {
    //Should respect that X0 = 1
    const variables = [1];
    const thetas = [100];

    expect(hypothesis(variables, thetas)).toBeCloseTo(1);
  });

  test('It should give the correct hypothesis when Z is very small', () => {
    //Should respect that X0 = 1
    const variables = [1];
    const thetas = [-100];

    expect(hypothesis(variables, thetas)).toBeCloseTo(0);
  });
});