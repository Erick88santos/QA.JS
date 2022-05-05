//Condicional: resgatar $2000 se o saldo for igual a $17500, e se, o saldo for igual ou maior que $18500 resgatar $3000 
const resgatePoupanca = (saldo,valorResgate) => {
    if (saldo == 17500) {
        saldo = saldo - valorResgate;
    }else if (saldo >= 18500) {
        saldo = saldo - valorResgate;
    }else {
        return Number((saldo-valorResgate))
    }
}

console.log(resgatePoupanca(17950,2000))

module.exports = resgatePoupanca