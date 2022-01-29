/*Objetos*/
var miAuto = {
	marca: "BMW",
	modelo: "X5",
	anio: 2020,
	puertas: 4,
	color: "Rojo"
};

/*En consola, la forma de consultar los datos del objeto es la siguiente: nombre del objeto . atributo. Por ejemplo*/
miAuto.marca;
/*El resultado es BMW*/

/*Se pueden generar funciones dentro del objeto. A estas se les llaman métodos*/
var miAuto = {
	marca: "BMW",
	modelo: "X5",
	anio: 2020,
	puertas: 4,
	color: "Rojo",
	detalleDelAuto: function(){
		console.log(`Auto ${this.marca} ${this.anio}`);
	}
};

/*Para mandar llamar la función dentro del objeto se crea la llamada de forma normal.*/
miAuto.detalleDelAuto();