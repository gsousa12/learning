//* Função de Forma Literal

function func1(parametro) {}

//* Armazenar em uma variável

const func2 = function (parametro) {}

//* Armazenar em um array

const array = [
  function (a, b) {
    return a + b
  }
]
console.log(array[0](2, 3))

//* Armazenar em um atributo de um objeto

const obj = {}
obj.falar = function () {
  return 'Olá tudo bem?!'
}
console.log(obj.falar())

//* Passar uma função como parâmetro para outro função

function run(fun) {
  fun()
}

run(function(){ console.log('executando...')})

//* Uma função pode conter uma função

function soma(a,b){
  return function (c) {
    console.log( a + b + c)
  }
}

soma(2,3)(5)

const cincoMais = soma(2,3)
cincoMais(5)