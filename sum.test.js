// sum.test.js
const sum = require('./sum');

test('additionne 1 + 2 pour donner 3', () => {
  expect(sum(3, 2)).toBe(5);
});
