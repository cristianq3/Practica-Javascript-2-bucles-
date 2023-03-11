/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math
 */

const filas = parseInt(prompt("Ingrese el número de filas"));
const columnas = parseInt(prompt("Ingrese el número de columnas"));

let mult = filas * columnas;

document.write(`<table>
<tbody>`);

for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  document.write(` 

    <tr> `);

  for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
    document.write(`
        <td> `);

    for (let mostrar = mult; mostrar <= mult; mostrar++)
      document.write(mostrar);
    mult--;

    ` 
        </td>
        
        `;
  }

  `</tr>

`;
}

document.write(`  </tbody>
</table> `);
