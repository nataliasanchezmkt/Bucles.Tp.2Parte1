/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/

let suma=0

do {
    let numero = parseInt(prompt('Escriba un numero'));

if (numero==Number(numero)){
    suma=suma+numero
}else {if
 (numero!= Number(numero)){
     alert('Ingrese un numero correcto')
 }

}

}while(confirm ('Desea continuar?'))
document.write(suma)
