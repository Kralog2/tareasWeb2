let userNum = parseInt(prompt("Ingresa tu primer número"));
let userNum1 = parseInt(prompt("Ingresa tu segundo número"));
let userNum2 = parseInt(prompt("Ingresa tu tercer número"));

if(userNum == userNum1){
    if(userNum1 == userNum2){
        alert("Pusiste el mismo número en los tres campos");
    }else{
        alert("Pusite el mismo número en el primer y segundo campo");
    }
    
}else{
    if(userNum1 == userNum2){
        alert("Pusite el mismo número en el segundo y tercer campo");
    }else{
        alert("pusiste números diferenctes en los tres campos");
    }
}