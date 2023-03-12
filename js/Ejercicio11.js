/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
 */
// pedir las edades
const edad1 = parseInt(prompt("Ingrese la edad de la primera persona"));
const edad2 = parseInt(prompt("Ingrese la edad de la segunda persona"));
const edad3 = parseInt(prompt("Ingrese la edad de la tercera persona"));
// Pedir los nombres
const nombre1 = prompt("Por favor ingrese el nombre de la primera persona");
const nombre2 = prompt("Por favor ingrese el nombre de la segunda persona");
const nombre3 = prompt("Por favor ingrese el nombre de la tercera persona");

edadMayor = Math.max(edad1, edad2, edad3);

console.log(edadMayor);

if (edadMayor === edad1) {
  document.write(nombre1 + " es mayor");
}

if (edadMayor === edad2) {
  document.write(nombre2 + " es mayor");
}

if (edadMayor === edad3) {
  document.write(nombre3 + " es mayor");
} else if (isNaN(edad1, edad2, edad3) === true) {
  document.write(
    "Ud ingreso una edad no válida, por favor ingresar un número como edad"
  );
}
