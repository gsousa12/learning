function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.2
  }
}

console.log(criarProduto('notebook', 2500))
console.log(criarProduto('iphone 11', 7800))