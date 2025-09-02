let numero1 = parseInt(prompt("Ingresa el primer bit (0 o 1): "));
let numero2 = parseInt(prompt("Ingresa el segundo bit (0 o 1): "));

let resultado1 =  (numero1 == 1) || (numero2 == 1)> 0;
let resultado2 =  (numero1 == 1) && (numero2 == 1);

console.log("El resultado para la compuerta OR es: " + resultado1);
console.log("El resultado para la compuerta AND es: " + resultado2);

