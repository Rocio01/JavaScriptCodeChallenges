
const result = document.getElementById("result")
const appendCalculation = (symbol) => {
 result.value = result.value + symbol;
}

const calculate = () => {
  result.value += "=" + eval(result.value);
}