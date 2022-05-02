function gerarNumerosEntre(min, max, tempo) {
  //Verifica se o min é menor que o máx antes de continuar a operação
  if (min > max) {
    [max, min] = [min, max];
  }
  //Criação da promessa que resolve o valor quando chamada a função
  return new Promise((resolve) => {
    setTimeout(function () {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      resolve(aleatorio);
    }, tempo);
  });
}

//Chamadas à função em tempos alternados. Somente depois de todas 
//as chamadas serem executadas, é que o then será executado.

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 1500),
    gerarNumerosEntre(1, 60, 700),
    gerarNumerosEntre(1, 60, 2800),
  ]);
}

gerarVariosNumeros().then(console.log);
