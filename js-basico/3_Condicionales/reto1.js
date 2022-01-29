//Juego de piedra papel o tijera
function jugar(a, b){
    console.log("El jugador eligio " + a + " y la máquina " + b);
    if(a == "piedra" && b == "papel") console.log("La máquina gana");
    else if(a == "piedra" && b == "tijera") console.log("El jugador gana");
    else if(a == "piedra" && b == "piedra") console.log("Empate");
    else if(a == "papel" && b == "papel") console.log("Empate");
    else if(a == "papel" && b == "tijera") console.log("La máquina gana");
    else if(a == "papel" && b == "piedra") console.log("El jugador gana");
    else if(a == "tijera" && b == "piedra") console.log("La máquina gana");
    else if(a == "tijera" && b == "papel") console.log("El jugador gana");
    else console.log("Empate");
}

console.log("Bienvenido al juego de Piedra, papel o tijera");
var ppt = ["piedra", "papel", "tijera"];

console.log("1. Piedra, 2. Papel, 3. Tijera. Escribe el número de tu selección");
var jugador = ppt[1];
var maquina = ppt[Math.floor(Math.random() * 3)];

jugar(jugador, maquina);


//Reto con switch
function jugar(a, b){
    console.log("El jugador eligio " + a + " y la máquina " + b);
    switch(a){
        case "piedra":
            switch(b){
                case "piedra":
                    console.log("Empate");
                    break;
                case "papel":
                    console.log("La máquina gana");
                    break;
                case "tijera":
                    console.log("El jugador gana");
                    break;
            }
            break;
        case "papel":
            switch(b){
                case "piedra":
                    console.log("El jugador gana");
                    break;
                case "papel":
                    ;
                    console.log("Empate");
                    break;
                case "tijera":
                    console.log("La máquina gana")
                    break;
            }
            break;
        case "tijera":
            switch(b){
                case "piedra":
                    console.log("La máquina gana");

                    break;
                case "papel":
                    console.log("El jugador gana");
                    break;
                case "tijera":
                    console.log("Empate");
                    break;
            }
            break;
    }
}

console.log("Bienvenido al juego de Piedra, papel o tijera");
var ppt = ["piedra", "papel", "tijera"];

console.log("1. Piedra, 2. Papel, 3. Tijera. Escribe el número de tu selección");
var jugador = ppt[1];
var maquina = ppt[Math.floor(Math.random() * 3)];

jugar(jugador, maquina);