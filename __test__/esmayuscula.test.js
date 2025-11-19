

const isUpperCase = require('../utils/esmayuscula');
test("devuelve verdadero si la palabra es mayuscula", () => {

        expect(isUpperCase("MESA")).toBe(true);

}) 

test("devuelve verdadero si la palabra es mayuscula", () => {

        expect(isUpperCase("mesa")).toBe(false);

})

