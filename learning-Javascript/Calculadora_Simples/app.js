let numero1 = document.querySelector("#number1");
      let numero2 = document.querySelector("#number2");
      let resultado = document.querySelector("#resultado");

      function som() {
        resultado.innerHTML = parseInt(numero1.value) + parseInt(numero2.value);
      }

      function sub() {
        resultado.innerHTML = parseInt(numero1.value) - parseInt(numero2.value);
      }

      function mul() {
        resultado.innerHTML = parseInt(numero1.value) * parseInt(numero2.value);
      }

      function div() {
        resultado.innerHTML = parseInt(numero1.value) / parseInt(numero2.value);
      }