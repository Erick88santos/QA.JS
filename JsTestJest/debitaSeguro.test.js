const debitaSeguro = require("./debitaSeguro")

test('debitaSeguro(11000,127) debitar do saldo de $11000 o valor de $127 do seguro da conta restando $10873', () => {
    expect(debitaSeguro(11000,127)).toBe((10873));
})