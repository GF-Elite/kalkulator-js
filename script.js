let input = "";
let result = "";

function addToDisplay(value) {
  input += value;
  document.getElementById("display").value = input;
}

function clearDisplay() {
  input = "";
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    result = eval(input);
    document.getElementById("display").value = result;
   
