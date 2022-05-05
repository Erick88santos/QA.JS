//Se saldo for igual ou maior que 12250 debite $2000 do saldo para investir, se não resgate 2000 dos seus investimentos 
const resgateInvestimento = (saldo,valorResgate) => {

   if (saldo >= 12250) {
       return Number((saldo-valorResgate))
   }else {
    return Number((saldo+valorResgate))
   }
}

console.log(resgateInvestimento(12250,2000))


module.exports = resgateInvestimento