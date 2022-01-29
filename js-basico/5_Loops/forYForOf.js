var estudiantes = ["María", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes(estudiantes) {
  console.log(`Hola!, ${estudiantes}`);
}

//Forma 1
for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

//Forma 2
for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}