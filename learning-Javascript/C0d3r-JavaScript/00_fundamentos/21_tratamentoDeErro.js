// Try, catch e throw

function tratarErroELancar(erro){
  //throw new Error('Erro detectado')
  //throw 10
  //throw false
  //throw 'mensagem de erro'
  throw {
    erro: erro.name,
    msg: erro.message,
    date: new Date
  }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('finally sempre chamado')
  }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
