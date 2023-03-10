/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
 */

for (let contador = 0; contador <= 30; contador++) {
  for (let multiplo = 1; multiplo <= contador; multiplo++) {
    document.write(contador);
  }

  document.write(`<br>`);
}
