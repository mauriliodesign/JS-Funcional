function gerarNumerosEntre(min, max) {
    //Verifica se o min é menor que o máx antes de continuar a operação
    if (min > max) {
        [max, min] = [min, max]
    }
    //Criação da promessa que resolve o valor quando chamada a função
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

//Chamada a função com a promessa, utilizando o .then
gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `Agora * 10 é ${numX10}`)
    .then(console.log)