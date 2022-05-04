const poupancaJuros = require("./juros")

//saída 
test('poupancaJuros(0.1,10000) retorne o valor do montante de $11000 no saldo da conta após os juros  de 0.1', () => {
    expect(poupancaJuros(10000,0.1)).toBe((11000));
})