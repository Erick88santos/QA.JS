const resgatePoupanca = require("./resgateautomatico")

test('resgatePoupanca(17950,2000) saldo $17950 resgatar $2000, retorne $15950 de saldo ', () => {
    expect(resgatePoupanca(17950,2000)).toBe((15950));
})