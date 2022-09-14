//* Tipo Array
// Agrupar multiplos valores de maneira linear(vetor).

const valores02 = [7.5, 8.5, 6.0, 9.0]

console.log(valores02[0], valores02[3])
console.log(valores02[4]) // Se tentar acessar um elemento não existente no Array vai dar Undefined

valores02[4] = 10 // Define o valor do indice 4 do arry
console.log(valores02[4])

console.log(valores02.length) // Mostra a quantidades de elementos do array

console.log(valores02)
console.log(valores02.pop()) // Remove o ultimo elemento do array
console.log(valores02)
console.log(valores02.pop())
console.log(valores02)

delete valores02[0] // tirou o elemento 0 do array
console.log(valores02)
