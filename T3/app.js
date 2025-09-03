max = 10;
min = 1;

let num = Math.floor(Math.random()*(max-min) +1);
console.log("Estoy pensando en el " + num);
let numUser = parseInt(prompt("ingrese el numero que estoy pensando del 1 al 10"));
let vidas = 3;

while(numUser !== num && vidas > 1){
    vidas --;
    console.log( "vidas restantes " + vidas);
    numUser = parseInt(prompt("Fallaste intenta con otro número, teines " + vidas + " vidas"));   
}

if (numUser === num){
    alert("Ganaste");
}else{
    alert("Perdiste");
}