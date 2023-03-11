/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 */

let numero = parseInt(prompt("Ingresa un número entre el 1 y el 50"));

if (!isNaN(numero) === true && numero >= 1 && numero <= 50) {
  for (let contador = 0; contador <= numero; contador++) {
    for (let multiplo = 1; multiplo <= contador; multiplo++) {
      for (let sumatoria = 1; sumatoria <= multiplo; sumatoria++) {
        document.write(sumatoria);
      }
    }
    document.write(`<br>`);
  }
}


else {
    alert("Por favor ingrese un Nº válido.")
}