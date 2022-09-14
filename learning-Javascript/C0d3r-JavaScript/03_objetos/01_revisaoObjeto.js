// Objeto é uma coleção dinâmica de pares chave/valor

const carro = new Object // uma Forma de criar um objeto 

carro.nome = 'x5' // Notação ponto

carro['modelo do carro'] = 'BMW'
carro.preco = 250000

console.log(carro)

// Deletar atributos de um objeto

delete carro.preco
delete carro['modelo do carro']

console.log(carro)



//! Objeto mais complexo

const caminhao = {
  modelo: 'volvo',
  valor: 800000,
  proprietario: {
    nome:'Raul',
    idade: 59,
    endereco: {
      cidade: 'Brasilia',
      logradouro: 'Rua ABC'
    }
  },
  condutores: [{  // Array dentro de um objeto
    nome: 'Leandro',
    idade: 23
  }, {
    nome: 'Pedro',
    idade: 39
  }, {
    nome: 'Andre',
    idade: 54
  }],
  calcularValorSeguro: function() {   // Função dentro de um objeto
    // codigo aqui
  }
}

caminhao.proprietario.endereco.numero = 1980

// console.log(caminhao) 

console.log(caminhao.condutores.length)


delete caminhao.condutores
console.log(caminhao.condutores) // retorna undefined