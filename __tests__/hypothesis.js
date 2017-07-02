const {hypothesisWithOneVariable} = require('../hypothesis');

describe('Hypothesis', () => {

  describe('Hypothesis with one variable', () => {
    it('Should return the right y when there is no slope', () => {
      expect(hypothesisWithOneVariable(0, 0, 0)).toBe(0);
      expect(hypothesisWithOneVariable(1, 0, 0)).toBe(0);

      expect(hypothesisWithOneVariable(0, 1, 0)).toBe(1);
      expect(hypothesisWithOneVariable(1, 1, 0)).toBe(1);
    });

    it('Should return the right y when there is a positive slope', () => {
      expect(hypothesisWithOneVariable(0, 0, 1)).toBe(0);
      expect(hypothesisWithOneVariable(1, 0, 1)).toBe(1);

      expect(hypothesisWithOneVariable(0, 1, 1)).toBe(1);
      expect(hypothesisWithOneVariable(1, 1, 1)).toBe(2);
    });

    it('Should return the right y when there is a negative slope', () => {
      expect(hypothesisWithOneVariable(0, 0, -1)).toBe(0);
      expect(hypothesisWithOneVariable(1, 0, -1)).toBe(-1);

      expect(hypothesisWithOneVariable(0, 1, -1)).toBe(1);
      expect(hypothesisWithOneVariable(1, 1, -1)).toBe(0);
    });
  });

});