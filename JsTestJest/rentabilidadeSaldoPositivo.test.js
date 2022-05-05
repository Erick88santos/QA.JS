const rentabilidadePositiva = require("./rentabilidadeSaldoPositivo")


test('rentabilidadePositiva(10250,500) retornar saldo mais bônus de rentabilidade positiva no valor de $10303.75 ', () => {
    expect(rentabilidadePositiva(10250,500)).toBe((10303.75));
})
