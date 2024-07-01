const analyzeArray = require('./analyze');


test('correct', () => {
    expect(analyzeArray.analyze([1,2,3])).toEqual({average: 2, minimum: 1, maximum: 3, length: 3});
  });