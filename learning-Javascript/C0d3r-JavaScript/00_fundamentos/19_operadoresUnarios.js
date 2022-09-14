let num1 = 1
let num2 = 2

num1++ // forma pós-fixada
console.log(num1)

--num1 // forma pré-fixada
console.log(num1)

num1 = 1
num2 = 2


console.log(++num1 === num2--) // true pois o ++(pré-fixado) foi executado antes da comparação e o --(pós-fixado) foi executado depois.

