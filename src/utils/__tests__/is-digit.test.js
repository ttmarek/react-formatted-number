import isDigit from '../is-digit';

[
  ['0', true],
  ['1', true],
  ['8', true],
  ['#', false],
  ['', false],
  [' ', false],
  ['$', false],
].forEach(([char, expectedOutput]) => {
  test(`"${char}" => ${expectedOutput}`, () => {
    expect(isDigit(char)).toBe(expectedOutput);
  });
});
