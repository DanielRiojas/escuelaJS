var edad = 18;

if(edad === 18){
    console.log("1ra votación");
}
else if(edad > 18) {
    console.log("Puedes votar");
}
else {
    console.log("Aún no puedes votar");
}

//If ternario
var numero = 1;

var resultado = numero === 1 ? "sí soy un uno" : "No soy un uno";
console.log(resultado);