const debitaFaturaCartao = require("./debitaFatura")



test('debitaFaturaCartao(10873,982)debitar do saldo de $10.873 o valor de $982 da Fatura do cartão de crédito ficando $9.891 de saldo', () => {
    expect(debitaFaturaCartao(10873,982)).toBe((9891));
})


