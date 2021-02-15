let minhaCarteira = {
    receitas: [2500, 250, 360, 90],
    despesas: [320.50, 128.50, 176.50, 1250.55, 10]
}
function somar(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}


function calcularBalanco(){
    const calcularReceitas = somar(minhaCarteira.receitas)
    const calcularDespesas = somar(minhaCarteira.despesas)

    const total = calcularReceitas - calcularDespesas

    const saldoPositivo = total >= 0

    let textoBalanco = " negativo "
    
    if(saldoPositivo) {
        textoBalanco = "positivo"

    }
    console.log(`Seu saldo é ${textoBalanco}: R$ ${total.toFixed(2)}`)

}
calcularBalanco()
