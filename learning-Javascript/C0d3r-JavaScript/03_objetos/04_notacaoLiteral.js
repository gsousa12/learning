const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };
console.log(obj1, obj2);

const nomeAtributo = "nome";
const valorAtributo = "Julio";

const obj3 = {};
obj3[nomeAtributo] = valorAtributo;

console.log(obj3);

// fazendo a mesma coisa do obj3 só que com notação literal de objetos.
const obj4 = { [nomeAtributo]: valorAtributo };
console.log(obj4);

// Definir função dentro de objeto Antes.

const obj5 = {
  funcao1: function () {
    // código
  },
};

//  Definir função dentro de um objeto literal.
const obj6 = {
  funcao2() {
    // código
  },
};
