//Operação de entrada de valor pix de $450 e retornar o saldo atual de $17.950
const creditaPix = (saldo,salario) => {
    return Number((saldo+salario))
}

console.log(creditaPix(450,17500))

module.exports = creditaPix