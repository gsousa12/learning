//* Tipo Boolean

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log(!!true)
console.log(!!false)

// Valores Verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

// Valores Falso
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(!!('' || null || 0 || 'epa')) // Se houver um true ele vai retornar true

console.log('' || null || 0 || 'epa') // Vai mostrar apenas o valor verdadeiro que no caso é "epa"

let nome02 = ''
console.log(nome02 || 'Nome desconhecido')

nome02 = 'Pedro'
console.log(nome02 || 'Nome desconhecido')
