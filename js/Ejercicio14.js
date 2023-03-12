/*  14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */

let frase = prompt("Ingrese su frase aquí");

if (frase !== null && frase !== undefined) {
  for (contador = 0; contador < frase.length; contador++) {
    if (contador === 0) {  // la primera vuelta va sin el guión " - "
      document.write(frase.charAt(contador, 1));
    } else {
      document.write("-");
      document.write(frase.charAt(contador, 1));
    }
  }
} else {
  document.write("Por favor ingrese un valor");
}
