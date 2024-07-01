const ceaserCipher = require('./cipher');


test('correct', () => {
  expect(ceaserCipher.cipher("julius",3)).toMatch("MXOLXV");
 });

 test('correct', () => {
    expect(ceaserCipher.cipher("JULIUS",3)).toMatch("MXOLXV");
   });

   test('correct', () => {
    expect(ceaserCipher.cipher("JULIUS JULIUS",3)).toMatch("MXOLXV MXOLXV");
   });