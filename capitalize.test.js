const capitalize = require('./capitalize');


test('correct', () => {
    expect(capitalize.capitalize("david")).toMatch("David");
  });