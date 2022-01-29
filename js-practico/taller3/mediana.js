function esPar(n) {
    return n % 2 === 0 ? true : false;
}

function calcularMediana(lista1){
    let mediana = 0;
    const mitadLista1 = parseInt(lista1.length / 2);

    //Ordenar el Array
    lista1.sort(function(a, b){
        return a - b;
    });

    if(esPar(lista1.length)){
        mediana = (lista1[mitadLista1 - 1] + lista1[mitadLista1]) / 2;
    } 
    else {
        mediana = lista1[mitadLista1];
    }
    return mediana;
}