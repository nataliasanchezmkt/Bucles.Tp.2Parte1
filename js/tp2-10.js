/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1*/


let filas = parseInt(prompt('Ingrese un numero de filas'));
let columnas = parseInt(prompt('Ingrese un numero de columnas'))

let total = filas * columnas
document.write('<table border>')


for(i=0;i<filas;i++){
    document.write('<tr>')


for(c=0;c<columnas;c++){
    document.write('<td>'+total+'</td>')
    total=total-1
}
document.write('</tr>')
document.write('</table>')

}
