const poupancaJuros = (saldo,juros) => {
    return Number((saldo*juros)+saldo)
}

console.log(poupancaJuros(10000,0.1))

module.exports = poupancaJuros