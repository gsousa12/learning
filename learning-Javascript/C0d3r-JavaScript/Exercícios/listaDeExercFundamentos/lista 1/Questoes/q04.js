/* 04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores */

function resto(dividendo, divisor) {
  console.log("Resultado da divisão = " + Math.floor(dividendo/divisor))
  console.log(`Resto = ${dividendo % divisor}`)
}

resto(10, 5)
resto(15, 8)
resto(78, 7)