const calculator = require('./script');


test('correct', () => {
  expect(calculator.add(1, 2)).toBe(3);
 });

test('correct', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });
  
test('correct', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

test('correct', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  

