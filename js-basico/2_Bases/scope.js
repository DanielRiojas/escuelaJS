//Scope Global
var miNombre = "Daniel";

function nombre(){
    //Scope Local
    var miApellido = "Riojas";
    console.log(miNombre + " " + miApellido);
}

nombre();