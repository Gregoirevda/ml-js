const {penalize} = require('../../logistic-regression/cost');

describe('Cost function for logistic regression', () => {

  describe('Penalize function', () => {

    test('Should not penalize when y = 1 and predicted y = 1', () => {
      expect(penalize(1, 1)).toBe(0)
    });

    test('Should not penalize when y = 0 and predicted y = 0', () => {
      expect(penalize(0, 0)).toBe(0)
    });

    test('Should penalize a bit when y = 1 and predicted y = 0.99', () => {
      expect(penalize(0.99, 1)).toBeCloseTo(0.01)
    });

    test('Should penalize a bit when y = 0 and predicted y = 0.01', () => {
      expect(penalize(0.01, 0)).toBeCloseTo(0.01)
    });

    test('Should penalize a lot when y = 1 and predicted y = 0', () => {
      expect(penalize(0, 1)).toBe(Infinity)
    });

    test('Should penalize a lot when y = 0 and predicted y = 1', () => {
      expect(penalize(1, 0)).toBe(Infinity)
    });

    test('Should throw an error when y is not 0 or 1', () => {
      expect(() => penalize(expect.any(Number), 2)).toThrowError(/Cost function error/)
    })
  });
});