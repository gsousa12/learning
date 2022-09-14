//* Let

// No Let vai ser sempre procurado o scoopo menor
// O Let diferende do Var tem scoopo de bloco {}

var numero = 1
{
  let numero = 2
  console.log('dentro =' + numero) // Aqui o programa vai procurar a variável 'numero' mais próxima e chamar (no caso a mais próxima é a que está dentro do bloco de código)
}
console.log('fora = ' + numero)