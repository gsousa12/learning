//* estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1

  return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

console.log('-----------------')

//* estrategia 2, 3 e 4
function soma2(a, b, c) {
  a = a !== undefined ? a : 1          // estrategia 2
  b = 1 in arguments ? b : 1          // estrategia 3
  c = isNaN(c) ? 1 : c               // estrategia 4 (Versão mais segura)

  return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//* valor padrão do es2015 ( versão mais usada)

function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
