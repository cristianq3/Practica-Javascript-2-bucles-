/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */

let numero = parseInt(prompt("Ingrese un Nº del 1 al 50"));

if (!isNaN(numero) === true && numero >= 1 && numero <= 50) {
  //Validacion si es numero valido
  for (let contador = numero; contador >= 1; contador--) {
    for (let multiplo = contador; multiplo >= 1; multiplo--) {
      document.write(contador);
    }
    document.write(`<br>`);
  }
} else {
  alert("Ingrese un Nº válido");
}

/* 
let numRepetir = prompt('Introduce la cantidad de números a repetir:');

if (!isNaN(numRepetir)) {
  if (numRepetir > 0 && numRepetir <= 50) {


    for (let i = numRepetir; i >= 1; i--) {


      for (let j = i; j >= 1; j--) {
        document.write(i);
      }
      document.write(`<br>`);
    }
  } else {
    alert('El número introducido no es válido.');
  }
} else {
  alert('No es un número');
} */