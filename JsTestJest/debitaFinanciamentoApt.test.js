//teste retorna o valor de $7.500 reais de saldo

const debitaFinanciameto = require("./debitaFinanciamentoApt")



test('debitaFinanciameto() após debitar valor $2.065 financiamentoApt retornar o valor de $7.500 reais de saldo', () => {
    expect(debitaFinanciameto(9565,2065)).toBe((7500));
})
 