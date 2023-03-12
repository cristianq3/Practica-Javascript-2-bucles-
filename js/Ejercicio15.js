// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingrese su texto para contar las vocales que tiene");

var sumaVocales = 0;

for (let contador = 0; contador < texto.length; contador++) {
  if (
    texto.charAt(contador) === "a" ||
    texto.charAt(contador) === "e" ||
    texto.charAt(contador) === "i" ||
    texto.charAt(contador) === "o" ||
    texto.charAt(contador) === "u" ||
    texto.charAt(contador) === "A" ||
    texto.charAt(contador) === "E" ||
    texto.charAt(contador) === "I" ||
    texto.charAt(contador) === "O" ||
    texto.charAt(contador) === "U"
  ) {
    sumaVocales = sumaVocales + 1;
  }
}
document.write(
  "El texto ingresado tiene <b> " + sumaVocales + "</b>  vocales en total"
);
