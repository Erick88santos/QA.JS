/*Aplique o bônus de rentabilidade de 0,52% do valor do saldo, 
se 5% do saldo do cliente fou igual ou superior a $500  
calcula-se osaldo + 500 e multiplica por 0.5% para somar ao saldo
*/
const rentabilidadePositiva = (saldo,bonusRentabilidade) => {
    if (saldo * 0.05 >= 500) {
        return Number((saldo+bonusRentabilidade)*0.005+saldo)
    }else {
        return Number((saldo))
    }
} 

console.log(rentabilidadePositiva(10250,500))

module.exports = rentabilidadePositiva