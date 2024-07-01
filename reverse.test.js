const reverseString = require('./reverse');


test('correct', () => {
  expect(reverseString.reverse("david")).toMatch("divad");
 });
