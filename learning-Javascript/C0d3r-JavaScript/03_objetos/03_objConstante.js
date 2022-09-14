// Pode-se mudar atributos de um objeto definido como const

const pessoa = { nome: "Leandro" };

pessoa.nome = "Lucas";
console.log(pessoa);

// Não é possivel atribuir um novo valor a pessoa.

// pessoa = {nome: "João"};  TypeError: Assignment to constant variable.

// O método Object.freeze(objeto) faz com que o objeto passado como referência não possa ser alterado.
Object.freeze(pessoa);

pessoa.nome = "Vanderley"; // Tentando mudar o nome para Vanderley.
console.log(pessoa); // Não irá alterar pois 'pessoa' foi frezada.

// Tanto não é possivel alterar atributos já existente como também não pode-se criar novos.

pessoa.idade = "21";
console.log(pessoa.idade); // retorna Underfined

// Também não permite deletar o objeto.

delete pessoa.nome;
console.log(pessoa.nome); // Nada aconteceu com 'pessoa.nome'.

