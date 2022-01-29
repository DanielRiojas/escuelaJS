/*Al establecer la variable de la siguiente forma podemos acceder 
durante todo el tiempo a esta, ya que está asignada de forma global.*/

var hello = 'Hello'
console.log(`${hello}`)

//Con var podemos reasignar el valor de la variable pero esto se considerá una mala práctica y debe evitarse a toda costa.


var hello = 'Hello'
var hello = 'Hello +'

console.log(`${hello}`)

/*Si tratamos de reasignar un valor a una variable con let
 la consola no dirá que hay un error en nuestro código, ya que no se le 
puede asignar un nuevo valor. Igualmente pasa lo mismo con const.*/

var hello = 'Hello'
let world = 'Hello world'
const helloWorld = 'Hello world!!!'
//const helloWorld = 'Hello!!!'

const antherFunction = () => {
    console.log(`${hello}`)
    console.log(`${world}`)
    console.log(`${helloWorld}`)
}

antherFunction();

/*Podemos crear variables dentro de funciones que pueden ser accedidas 
desde fuera de la función de la siguiente forma, aunque esto considerado
 una mala práctica. Además, si se asigna una variable dentro de una 
función sin las palabras reservadas será una variable global.*/

const helloWorldFunction = () => {
    globalVar = 'im global'
}

helloWorldFunction()
console.log(globalVar)