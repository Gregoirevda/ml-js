const {hypothesisWithOneVariable, hypothesis} = require('../../linear-regression/hypothesis');

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


  describe('Hypothesis with mutiple variables', () => {
    it('Should return the correct y with multiple variables when there is no slope and 0 starting point', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 0, 0];
      const y = 0;

      const thetas = [0, 0, 0];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is no slope and 0 starting point', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 1, 0];
      const y = 0;

      const thetas = [0, 0, 0];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is no slope and 0 starting point', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 1, 1];
      const y = 0;

      const thetas = [0, 0, 0];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is no slope and positive starting point', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 0, 0];
      const y = 1;

      const thetas = [1, 0, 0];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is no slope and negative starting point', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 0, 0];
      const y = -1;

      const thetas = [-1, 0, 0];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is a positive slope and 0 starting point', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 1, 0];
      const y = 1;

      const thetas = [0, 1, 0];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is a positive slope and 0 starting point', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 0, 1];
      const y = 1;

      const thetas = [0, 0, 1];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is a positive slope and negative start', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 1, 0];
      const y = 0;

      const thetas = [-1, 1, 0];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is a positive slope and negative start', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 1, 0];
      const y = 1;

      const thetas = [-1, 2, 0];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is a positive slope and negative start', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 2, 0];
      const y = 3;

      const thetas = [-1, 2, 0];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is a positive slope and negative start', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 2, 2];
      const y = 5;

      const thetas = [-1, 2, 1];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is a positive slope and positive start', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 2, 2];
      const y = 7;

      const thetas = [1, 2, 1];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is a negative slope and positive start', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 2, 2];
      const y = -5;

      const thetas = [1, -2, -1];

      expect(hypothesis(x, thetas)).toBe(y);
    });

    it('Should return the correct y with multiple variables when there is a negative & positive slope and positive start', () => {
      //Should respect the convention that x0 is 1
      const x = [1, 2, 2];
      const y = 3;

      const thetas = [1, -2, 3];

      expect(hypothesis(x, thetas)).toBe(y);
    });
  });

});