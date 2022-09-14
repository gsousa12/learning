const result = document.querySelector("#resultado");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");

function calcularImc() {
  if (altura.value !== "" && peso.value !== "") {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    console.log(imc);
    result.textContent = "";

    if (imc < 18.5) {
      result.textContent = "Abaixo do peso";
    } else if (imc < 25) {
      result.textContent = "Peso normal";
    } else if (imc < 30) {
      result.textContent = "Acima do peso";
    } else if (imc < 35) {
      result.textContent = "Obesidade Grau I";
    } else if (imc < 41) {
      result.textContent = "Obesidade Grau II";
    } else {
      result.textContent = "Obesidade Grau III";
    }
  } else {
    result.textContent = "Campos Vazios!!!!!";
  }
}
