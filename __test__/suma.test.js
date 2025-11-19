const sum = require('../utils/suma');

test("sumar 1 mas 2", () => {

        expect(sum(1,2)).toBe(3);

}) 

test("sumar -1 mas -2", () => {

    expect(sum(-1,-2)).toBe(-3);

})

test("sumar 1 mas -2", () => {

    expect(sum(1,-2)).toBe(-1);

})

test("sumar 0 mas -2", () => {

    expect(sum(0,-2)).toBe(-2);

})