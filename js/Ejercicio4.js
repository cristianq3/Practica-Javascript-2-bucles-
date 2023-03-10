//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los ido números introducs+zz¿'x<p'pxd.
let suma = 0;

do {
  let numero = parseInt(prompt("Ingrese un número"));

  if (!isNaN(numero) === true) {
    suma = parseInt(suma) + numero;
  } else {
    alert("Ingrese un Número válido");
  }
} while (confirm("Quiere agregar otro número?"));

document.write(`<p>La Suma es  <strong> ${suma}</strong></p> `);
