// Novo recurso do ES2015
// Destructuring é tirar um valor primitivo ou uma estrutura de dados de dentro deu uma outra estrutura (objeto ou array)


//! Destructuring a partir de um Objeto

const pessoa = {
  nome: 'Ana',
  idade: '21 anos',
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1920
  }
}

const { nome, idade} = pessoa // Destructuring = estou criando duas novas variáveis (nome e idade) a partir da variavel pessoa
console.log(nome,idade)

const { nome: n, idade: i} = pessoa // Aqui eu renomeei as variaveis nome e idade para n e i
console.log(n, i)

const { endereco: {logradouro, numero, cep} } = pessoa // aqui acessei as variaveis logradouro e numero dentro de endereço. Cep não existe então eu criei
console.log(logradouro, numero, cep) // Cep veio undefined pois ela não existia antes 
console.log(logradouro, numero, cep)

//! Destructuring a partir de um Array 1

const fruits = ['banana', 'pera', 'uva']

const [banana] = fruits
console.log(banana)

//! Destructuring a partir de um Array 2

const [a] = [10]
console.log([a])

const [n1, ,n3, ,n5,n6 = 0] = [10, 7, 9, 0]
console.log(n1,n3,n5,n6)

//! Destructuring function

function rand({min = 0, max = 1000}) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = {max: 100, min: 1}
console.log(rand(obj))






