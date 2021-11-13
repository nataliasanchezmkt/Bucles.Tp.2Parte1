/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/


let numero='';

for (i=0;i<50;i++){
    numero = numero + i
    document.write('<br>'+numero)

}


// creamos la variable numero vacia apra que guarde los valores de i, es importante que al crear la variable se cree como un string asi guarde los valores de i como cadena de texto, ya que si los guarda como numero los sumara.