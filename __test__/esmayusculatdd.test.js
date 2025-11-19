const isUpperCase = require('../utils/esmayuscula');

describe('Palabras', () => {
    test.each`
      firstWalue | expectedResult    
      ${roberto}       | ${roberto}
      ${casa}      | ${casa}
      ${mesa}      | ${mesa}
      ${silla}      | ${silla}
      ${cama}      | ${cama}
    `('$firstWord should return $expectedResult', ({firstWord, expectedResult}: (firstWord: any; expectedResults: any)) => {
      expect(isUpperCase(firstWord)).toBe(false);
    });
  });

  