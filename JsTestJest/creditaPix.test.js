const creditaPix = require("./creditaPix")


test('creditaPix(17500,450) retorne a soma de saldo $17.500 mais créditaPix de $450 = $17.950 ', () => {
    expect(creditaPix(17500,450)).toBe((17950));
})