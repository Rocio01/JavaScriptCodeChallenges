
const result = document.getElementById("result")
let toBecleared = false;

const appendCalculation = (symbol) => {
 if(toBecleared === true){
   clear()
 }
 result.value = result.value + symbol;
}

const calculate = () => {
  toBecleared = true;
  result.value += " = " + eval(result.value);
}

const clear = () => {
  result.value = "";
  toBecleared = false;
}
const clearText = () => {
  result.value = "";
  toBecleared = false;
}