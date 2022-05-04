const creditaSalario = require("./creditaSalario")

test('creditaSalario(7500,10000) retorne a soma do saldo atual de $7.500 mais $10.000 de salário = $17.500 ', () => {
    expect(creditaSalario(7500,10000)).toBe((17500));
})