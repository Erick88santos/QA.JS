//Debitando do saldo de $9.565 o valor de $2065 do financiamento do apartamento e retornando o valor de $7.500 reais de saldo

const debitaFinanciameto = (saldo,financiamentoApt) => {
    return Number((saldo-financiamentoApt))

}

console.log(debitaFinanciameto(9565,2065))

module.exports = debitaFinanciameto