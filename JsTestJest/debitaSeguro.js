//Débito de serviço de seguro mensal da conta 
const debitaSeguro = (saldo,seguro) => {
    return Number((saldo-seguro))
}

console.log(debitaSeguro(11000,127))

module.exports = debitaSeguro