function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log('Aprovado com ' + nota)
  }
}

soBoaNoticia(8.1)
soBoaNoticia(5)

function seForTrue(valor) {
  if (valor) {
    console.log('É verdade... ' + valor)
  }
}

seForTrue()
seForTrue('olá')
seForTrue(8)
seForTrue({})
seForTrue(!false)
seForTrue(' ')
seForTrue([])
