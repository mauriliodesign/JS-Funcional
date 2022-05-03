function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo);
  });
}

/* esperarPor(1000)
    .then(esperarPor)
    .then(() => console.log("Executando promise 1..."))
    .then(esperarPor)
    .then(() => console.log("Executando promise 2..."))
    .then(esperarPor)
    .then(() => console.log("Executando promise 3...")) */

function retornarValor(tempo = 5000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(10), tempo)
  });
}

async function executar() {
  let valor = await retornarValor()

  await esperarPor(1200)
  console.log(`Executando Async/Await ${valor}...`)

  await esperarPor(1200)
  console.log(`Executando Async/Await ${valor + 1}...`)

  await esperarPor(1200)
  console.log(`Executando Async/Await ${valor + 2}...`)
}

async function executarDeVerdade() {
  const valor = executar()
  console.log(valor)
}

executarDeVerdade()
