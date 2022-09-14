//* Null e Undefined
// Quando quiser zerar algo use o null. Deixe o undefined para a própria linguagem atribuir a valores não definidods

let valor
console.log(valor) // o valor da variável nem foi definida

valor = null // ausência de valor mas foi definida
console.log(valor)

// Se tentar acessar algo de um valor null dará erro
/* 
Ex:
console.log(valor.toString())  */

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.5
console.log(produto.preco)

produto.preco = undefined // EVITER atribuir undefined. Use o null quando quiser zerar uma variavel/constante

console.log(produto.preco)
// delete produto.preco    Use delete quando quiser remover um atributo
console.log(produto)

produto.preco = null // Sem preço

console.log(produto)

console.log(produto.preco)
// delete produto.preco    Use delete quando quiser remover um atributo
console.log(produto)

produto.preco = null // Sem preço

console.log(produto)
