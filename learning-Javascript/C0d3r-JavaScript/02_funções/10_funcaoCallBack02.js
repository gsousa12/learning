const notas = [7, 6.5, 5.2, 3, 7.2, 9, 2, 5.9]


// Sem CallBack

let notasBaixas1 = []

for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i])
  }
}

console.log(notasBaixas1)


// Com CallBack

const notasBaixas2 = notas.filter(function(nota) {
  return nota < 7
})

console.log(notasBaixas2)

// Com CallBack + arrow

const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)

// Com CallBack + arrow armazenada em uma constante 

const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)

console.log(notasBaixas4)