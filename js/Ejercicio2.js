// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

let nota = parseInt(prompt("Ingrese la nota"));

//Verifico con la funcion isNAN que sea un numero. si no lo es que solicite uno valido.

if (isNaN(nota) === true) {
  alert("Ingrese un número válido");
}

// condicion para verificar que este en el rango.
else if (nota < 0 || nota > 10) {
  alert("Ingrese un rango de 0 a 10");
}

// Rangos de las notas con mensajes de alerta segun la calificación.
else if (nota >= 0 && nota <= 2) {
  alert("La nota es Muy deficiente");
} else if (nota >= 3 && nota <= 4) {
  alert("La nota es Insuficiente");
} else if (nota >= 5 && nota <= 6) {
  alert("La nota es Suficiente");
} else if (nota === 7) {
  alert("La nota es Bien");
} else if (nota >= 8 && nota <= 9) {
  alert("La nota es Notable");
} else if (nota === 10) {
  alert("La nota es Sobresaliente");
}
