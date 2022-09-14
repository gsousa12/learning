function add(idOpcao) {
    const id = document.getElementById(idOpcao);
    const value = +id.textContent;
  
    id.innerText = value + 1;
  
  }
  
  function rem(idOpcao) {
    const id = document.getElementById(idOpcao);
    const value = +id.textContent;
  
    if (value > 0) {
      id.innerText = value - 1;
    }
  }