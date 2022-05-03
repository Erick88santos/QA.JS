const potencia = require("./potencia")


test('potencia(10,30) retorne potência de dois números', () => {
    expect(potencia(3,3)).toBe(27);
})
