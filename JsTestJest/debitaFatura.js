//Debitando valor da fatura mensal do Cartão de Crédido
 
const debitaFaturaCartao = (saldo,faturaCartao) => {
    return Number((saldo-faturaCartao))
}

console.log(debitaFaturaCartao(10873,982))

module.exports = debitaFaturaCartao