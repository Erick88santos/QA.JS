//Deposito de terceiros na conta referente a salário

const creditaSalario = (saldo,salario) => {
    return Number((saldo+salario))
}

console.log(creditaSalario(7500,10000))

module.exports = creditaSalario