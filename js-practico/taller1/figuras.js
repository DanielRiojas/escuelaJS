// Funciones que encapsulan las funcionalidades de cuadrado
function perimetroCuadrado(lado) {
    return lado > 0 ? lado * 4 : 'Ingresar un valor válido';
}

function areaCuadrado(lado) {
    return lado > 0 ? lado * lado : 'Ingresar un valor válido';
}

// Funciones que encapsulan las funcionalidades de triángulo
function perimetroTriangulo(lado1, lado2, base) { 
    return lado1 > 0 && lado2 > 0 && base > 0 ? lado1 + lado2 + base : 'Ingresar valores válido';
}

function areaTriangulo(altura, base) { 
    return altura > 0 && base > 0 ? (base * altura)/2 : 'Ingresar valores válido';
}

// Funciones que encapsulan las funcionalidades de círculo
function diametroCirculo(radio) {
    return radio > 0 ? radio * 2 : 'Ingresar un valor válido';
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return radio > 0 ? diametro * Math.PI  : 'Ingresar un valor válido';
}

function areaCirculo(radio) {
    return radio > 0 ? (radio * radio) * Math.PI : 'Ingresar un valor válido';
}

//Función para la altura del triángulo isósceles 
function alturaIsosceles(b, l1) {
    //Calcular la altura y retornarla
    return Math.sqrt(Math.pow(l1, 2) - Math.pow(b, 2) / 4);
}

//Aqui nos conectamos con el HTML:
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es:" + perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El area del cuadrado es:" + area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);
    const base = document.getElementById("InputBaseTriangulo");
    const value3 = Number(base.value);
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputBaseTriangulo");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("InputAlturaTriangulo");
    const value2 = Number(input2.value);
    const area = areaTriangulo(value2, value1);
    alert("El area del triangulo es: " + area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perimetro del circulo es: " + perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El area del circulo es: " + area);
}

function calcularAlturaIso() {
    const b = Number(document.getElementById("InputBase").value);
    const l1 = Number(document.getElementById("InputIso1").value);
    const l2 = Number(document.getElementById("InputIso2").value);

    //Validar si es posible contruir un triángulo
    if(!(l1 + l2 > b && l1 + b > l2 && l2 + b > l1)) alert("No es posible armar un triángulo con esas medidas");

    //Validar si es un triángulo isósceles
    else if(l1 != l2) alert('No es un triángulo isósceles');

    else alert("La altura del isósceles es: " + alturaIsosceles(b, l1));
}