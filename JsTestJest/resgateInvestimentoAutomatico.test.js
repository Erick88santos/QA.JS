const resgateInvestimento = require("./resgateInvestimentoAutomatico");



test('resgateInvestimento(12250,2000) aplicar o valor de $2000 e retornar saldo de $10250 ', () => {
    expect(resgateInvestimento(12250,2000)).toBe((10250));
})

