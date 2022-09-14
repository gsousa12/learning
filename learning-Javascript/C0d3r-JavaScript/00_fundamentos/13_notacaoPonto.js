//* Notação ponto é um assessor de propriedade que fornece acesso as propriedades de um objeto.

console.log('olá') // .log é uma notação ponto
Math.floor() //.floor

const obj1 = {}
obj1.nome = 'Bola' // .nome foi um notação ponto que acressentou uma propriedade a const obj1
console.log(obj1.nome)

// function

function Obj(nome) {
  this.nome = nome
  this.exec = function(){
    console.log('executando...')
  }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()


//* Notação cochêtes

obj1['nome'] = 'Bola2'
console.log(obj1.nome)


