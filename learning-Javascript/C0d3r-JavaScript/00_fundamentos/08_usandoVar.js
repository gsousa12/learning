//* Var

//! Scoopo do Var
// uma variável pode ser chamada fora do scoopo no Js

{
  {
    {
      var seraChamada = 'Será Chamada???'
    }
  }
}

console.log(seraChamada)

// Uma variável definida dentro de uma function não poderá ser chamada fora dessa function (ocorrerá erro)

