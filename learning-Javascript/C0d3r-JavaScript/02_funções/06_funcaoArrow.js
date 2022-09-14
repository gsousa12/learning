// Função arrow sempre é anônima

let dobro = function (a) {
  return 2 * a
}

//* Reescrevendo a mesma função em Arrow

dobro = a => {
  return 2 * a
}

//* Mais reduzida  (retirando os parênteses se tiver um único parâmetro)

dobro = a => 2 * a      // Se retirar o {} o "return" é implícito
console.log(dobro(3))

//* Mais exemplos

let triplo = a => 3 * a
console.log(triplo(3))

let areaT = (b,h) => (b*h)/2
console.log(areaT(2,3))



let ola = function(){
  return 'olá!!!'
}

ola = () => 'olá!!!'
console.log(ola())



let circunferenciaCirculo = (r) => 2 * Math.PI * r
console.log(circunferenciaCirculo(3))