const subtrair = require("./subtrair")


test('subtrair(500,1200) retorne a subtração de dois números', () => {
    expect(subtrair(500,1200)).toBe(-700);
})
