//* Tipo String

const palavra = 'Pal4vra'
console.log(palavra.charAt(4)) // .charAt retorna a letra correspondente ao valor passado em (x)

console.log(palavra.charCodeAt(4)) // Retorna o número do código UTF-16 do valor de (x)

console.log(palavra.indexOf('P')) // Mostra o indice do valor de (x)

console.log(palavra.substring(1)) // Começa a String a partir do valor do índice (x)

console.log(palavra.substring(0, 3)) // Começa do índice 0 e vai até o indice 3 (sem incluir ele)

console.log('Isso é uma '.concat(palavra).concat('!!!')) // Concatenação com .concat

console.log('Isso é uma ' + palavra + '!!!') // Concatenação com +

console.log('Ana,Maria,Clara'.split(',')) // Transforma uma String em Array

//* Template String

const nome = 'Rebeca'
const template = `
    olá ${nome}!
    Seja Bem Vinda.`
console.log(template)

// Expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!!!`)
