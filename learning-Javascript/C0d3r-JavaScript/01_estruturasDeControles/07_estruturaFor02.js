 const notas = [2, 4, 5, 8, 10, 8]

 for (let i in notas) {
   console.log(i, notas[i])
 }

 const pessoa = {
  nome:'Ana',
  sobrenome: 'Soares',
  idade: 21,
  peso: 70
 }

 console.log("-----------------")

 for(let atributo in pessoa) {
   console.log(`${atributo} = ${pessoa[atributo]}`)
 }