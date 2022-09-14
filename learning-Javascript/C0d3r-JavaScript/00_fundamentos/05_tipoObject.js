//* Tipo Objeto

const prod1 = {}

prod1.nome = 'Iphone 12 Pro'
prod1.valor = 8900

console.log(prod1)

prod1['Desconto'] = 12

console.log(prod1)

const prod2 = {
  nome: 'Camisa Polo',
  detalhes: {
    cor: 'azul',
    tamanho: 'M',
    material: {
      algodao: 20,
      poliester: 15,
      sintetico: 18
    }
  }
}

console.log(prod2)
