for ( var i = 0 ; i < 10; i++) {
  console.log(i)
}

console.log('i=',i) // i vai poder ser chamada pois var não tem scoopo de bloco . Se fosse o let no lugar de var daria erro

//* function dentro do for

//! Usando var

const funcs = []
for (var i = 0; i < 10; i++) {
  funcs.push(function(){
    console.log(i)
  })
}

funcs[2]()
funcs[8]()

//! Usando Let

const funcs02 = []
for ( let p = 0; p<10; p++) {
  funcs02.push(function(){
    console.log(p)
  })
}

funcs02[2]()
funcs02[5]()
funcs02[9]()