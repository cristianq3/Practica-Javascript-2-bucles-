// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const texto = prompt("Ingrese un texto para ser puesto al revés");

for (let contadorIda = texto.length - 1; contadorIda >= 0; contadorIda--) {
  document.write(texto[contadorIda]);
}
