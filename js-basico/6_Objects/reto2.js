function auto(marca, modelo, annio) {  
    this.marca = marca;    
    this.modelo = modelo;
    this.annio = annio;
}

var autos = [];

for(var i = 0; i < 30; i++){
    var marca = prompt("Escribe la marca");
    var modelo = prompt("Escribe el modelo");
    var annio = prompt("Escribe el annio");
    var nuevoAuto = auto(marca, modelo, annio);
    autos.push(nuevoAuto);
}