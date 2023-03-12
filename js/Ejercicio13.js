// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.

let texto = prompt("Ingrese su texto para pasar todo a mayúsculas");

if (texto != null) {
  document.write(texto.toUpperCase());
} else {
  document.write("Ingrese un valor ");
}
