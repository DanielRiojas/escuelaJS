//Moda

function calcularModa(lista1) {
    const lista1count = {};

    lista1.map(
        function(elemento){
            if(lista1count[elemento]) {
                lista1count[elemento] += 1;
            }
            else lista1count[elemento] = 1;
        }
    );

    const lista1Array = Object.entries(lista1count).sort(
        function (a, b) {
            return a[1] - b[1];
        }
    );

    const moda = lista1Array[lista1Array.length - 1];
    return moda;
}