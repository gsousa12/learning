// Contexto Léxico = local físico que sua váriavel foi definida


const saudacao = 'Olá' //! contexto Léxico 1

function exc() {
  const saudacao = 'Falaa' //! contexto Léxico 2
  return saudacao
}

const falas = {
  nome:'gabriel',
  saudacao: 'Tudo bem?', //! contexto Léxico 3
}

console.log(saudacao)
console.log(exc())
console.log(falas.saudacao)
