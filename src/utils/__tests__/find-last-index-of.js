import findLastIndexOf from '../find-last-index-of';
import isDigit from '../is-digit';


describe('Last Digit', () => {
  [
    ['(###) ### ####', -1],
    ['(123) 4## ####', 6],
    ['(1##) ### ####', 1],
  ].forEach(([input, expectedOutput]) => {
    test(`${input} => ${expectedOutput}`, () => {
      expect(findLastIndexOf(input)).toBe(expectedOutput);
    });
  });
});
