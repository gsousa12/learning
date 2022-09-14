// Hoisting JavaScript é o deslocamento da declaração de todas as variáveis e funções para o topo do código.

console.log('a = ', a) // vai interpretar como a variavel a undefined porém existente
var a = 2
console.log('a = ', a)

// Esse efeito de hoisting só ocorre com var. 