//* Funções
// Uma função agrupa um bloco de códigos({}).
// Recebe um parámetro de entrada e dentre desse parametro recebe todo o código a ser executado.
/*
Uma função pode: 
NÃO receber nenhum parametro 
NÃO retornar dado */

function NomedaFuncao(parametro) {
  //Bloco de código aqui
}

//! Função sem Retorno

function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Vai dar NaN pois o segundo valor vai ser undefined e a soma de um inteiro mais undefined é = a NaN
imprimirSoma(2, 10, 4, 5, 6) // Vai pegar os dois primeiros parametros e o resto vai ser ignorado
imprimirSoma()

//! Função com Retorno

function soma(a, b = 1) {
  return a + b
}

console.log(soma(2, 3)) // Aqui eu defini o valor de b sendo 3, entao ele alterou o valor padrao que era b=1
console.log(soma(2)) // Aqui como eu não defini o valor de b ele usou o valor padrão que era b=1
console.log(soma()) // NaN pois o valor de a é undefined

//! Armazenando uma função em uma variável

const imprimirSoma02 = function (a, b) {
  console.log(a + b)
}
imprimirSoma02(2, 18)

//! Armazenando uma função arrow em uma variável

const soma02 = (a, b) => {
  return a + b
}
console.log(soma02(8, 5))

//! Retorno implícito da função arrow

const subtracao = (a, b) => a - b
console.log(subtracao(10, 8))

const imprimir = a => console.log(a)
imprimir('Legal')
