// Usando a notacao literal
const obj1 = {}

// Object em JS
const obj2 = new Object

// Funções Construtoras
function Produto(nome,preco,desc) {
  this.nome = nome
  this.getPrecoComDesc = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('Caneta', 3.99, 0.15)
const p2 = new Produto('Notebook', 1233.99, 0.35)

console.log(p1.getPrecoComDesc(), p2.getPrecoComDesc())

// Função Factory (Função que cria um objeto)
function criarFuncionario(nome,salarioBase,faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('Joãp', 6000, 5)
const f2 = criarFuncionario('Maria', 12000, 1)

console.log(f1.getSalario(), f2.getSalario())

// Object.creat
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// JSON
const fromJSON = JSON.parse ('{"info": "Sou um JSON"}')
console.log(fromJSON.info)