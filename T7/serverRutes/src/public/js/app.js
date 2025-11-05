document.getElementById("comp").addEventListener("submit", function (event) {
  event.preventDefault();
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Por favor, ingresa números válidos.";
  }
  if (num1 == num2) {
    result = num1 + " es igual que " + num2;
  } else {
    if (num1 < num2) {
      result = num1 + " es menor que " + num2;
    } else {
      result = num2 + " es menor que " + num1;
    }
  }

  console.log("resultado: " + result);

  document.getElementById("resultado").innerText = "el numero: " + result;
});
