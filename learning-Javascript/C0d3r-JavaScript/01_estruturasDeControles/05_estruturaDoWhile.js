function getInteiroAlearioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao 

do {
  opcao = getInteiroAlearioEntre (-1, 20)
  console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Fim do programa')