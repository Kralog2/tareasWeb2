//Ortega mendoza César Gabriel
let numero1 = parseFloat(prompt("Ingresa el primer operando: "));
//let operador = prompt("Ingresa el operador Ej. +, -, *, /: "); variavle para el operador en el caso switch
let numero2 = parseFloat(prompt("Ingresa el segundo operando: "));
let suma = numero1 + numero2; /*con las variables mostrara las cuatro operaciones basicas de ambos numeros*/
let resta = numero1 - numero2; 
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

console.log("Suma "+ suma);
console.log("Resta "+ resta);
console.log("Mutiplicacion "+ multiplicacion);
console.log("Division "+ division); /*No se si hay forma de prevenir que se ponga cero en el numero dos*/

//En caso de harse con switch

/*let resultado;

switch (operador){
    case "+": resultado = numero1 + numero2;
    break;
    case "-": resultado = numero1 - numero2;
    break;
    case "*": resultado = numero1 * numero2;
    break;
    case "/": if (numero2 !== 0){
                    resultado = numero1 / numero2;
                }else{
                    resultado = "No se puede bro";
                }
    break;
    default: resultado = "Ahorita ando ocupado intenta con otra"
}
console.log("El resultado de tu operacion es "+ resultado);
*/

