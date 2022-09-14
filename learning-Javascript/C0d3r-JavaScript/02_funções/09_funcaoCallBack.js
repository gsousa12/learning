const fabricantes = ['Mercedes', 'Audi', 'Bmw']

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

console.log("-----------");

fabricantes.forEach(function(marca){
  console.log(marca)
})

console.log("-----------");

fabricantes.forEach( marca => console.log(marca)) // Mesma da de cima so que arrow