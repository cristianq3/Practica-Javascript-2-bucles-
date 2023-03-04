// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// Se declara la variable con el valor del prompt que ingrese el user

let edad = parseInt(prompt("Ingrese la edad"));

// Condicional para consultar el rango de edades y mostrar si puede o no manejar.

if (edad >= 18) {
  document.write("Puede conducir");
} else if (edad < 18) {
  document.write("No puede conducir todavia");
}

// Todo los datos que no esten dentro del rango

else {
  document.write("Por favor ingresar una edad válida");
}
