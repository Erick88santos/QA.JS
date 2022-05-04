//Debitando do saldo de $9.891 o valor de $326 do empréstimo consignado e rotornando o valor de $9.565 reais de saldo

const debitaConsignado = (saldo,consignado) => {
    return Number((saldo-consignado))

}

console.log(debitaConsignado(9891,326))

module.exports = debitaConsignado