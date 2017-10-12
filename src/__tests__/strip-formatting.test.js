import stripFormatting from '../strip-formatting';

[
  [' ', ''],
  ['(', ''],
  ['(1', '1'],
  ['(123)', '123'],
  ['(123) 4', '1234'],
  ['(123) 456 7890', '1234567890'],
  ['(123) 456 78901', '1234567890'],
].forEach(([input, expectedOutput]) => {
  test(`${input} => ${expectedOutput}`, () => {
    expect(stripFormatting(input)).toEqual(expectedOutput);
  });
});
