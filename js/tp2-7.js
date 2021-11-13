/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/



/*for (let i=parseInt(prompt('Ingrese un numero menor a 50')); i<50; i=i-1){
    for(let k=0; k<i;k--){
        document.write(i)
    }
     document.write('<br>');
}
// hacer un if que doga q no puede ser mayor a 50 y q salga un alert
// loop q repita los numeros y utilizar valores --
*/

for(let i= parseInt(prompt('Ingrese un numero menor a 50')); i>0 && i<=50; i=i-1){
    
    
    for(let k=0 ;k<i; k++)
    {document.write(i)} 
    document.write('<br>')
}

