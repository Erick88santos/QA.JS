const debitaConsignado = require("./debitaConsignado")



test('debitaConsignado(9891,326) retornanrdo saldo de $9.891 o valor de $326 rotornar valor de $9.565 reais de saldo', () => {
    expect(debitaConsignado(9891,326)).toBe((9565));
})
 