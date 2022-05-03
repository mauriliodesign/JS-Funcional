function gerarNumerosEntre(min, max, numerosProibidos) {
    //Verifica se o min é menor que o máx antes de continuar a operação
    if (min > max) {
        [max, min] = [min, max]
    }
    //Criação da promessa que resolve o valor quando chamada a função
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')
        } else {
            resolve(aleatorio)
        }
    })
}