// Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

const frase = prompt("Ingrese un texto y se mostrará la primera vocal");

for (let i = 0; i < frase.length; i++) {
  if (
    frase.charAt(i) === "a" ||
    frase.charAt(i) === "e" ||
    frase.charAt(i) === "i" ||
    frase.charAt(i) === "o" ||
    frase.charAt(i) === "u" ||
    frase.charAt(i) === "A" ||
    frase.charAt(i) === "E" ||
    frase.charAt(i) === "I" ||
    frase.charAt(i) === "O" ||
    frase.charAt(i) === "U"
  ) {
    document.write("La primera vocal encontrada es la " + frase.charAt(i).toUpperCase());
    document.write(` y está en la posición Nº <b> ${i+1} </b>`);
    break;
  }
  
}
