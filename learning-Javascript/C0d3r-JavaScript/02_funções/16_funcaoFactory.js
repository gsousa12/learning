//* Função Factory é uma função que retorna um objeto 

// Factory simples

function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Soares'
  }
}

console.log(criarPessoa());