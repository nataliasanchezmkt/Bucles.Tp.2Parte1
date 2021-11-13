
/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….*/

for (let i=1; i<=30; i++){
    for(let k=0; k<i; k++){
        document.write(i)}
    document.write('<br>')}


// en nested loops, se repetiran en iner loop hasta que no se pueda  repetir, por lo q por cada iteracion del outer loop, el inner loop se repite hasta  q se corta, y se 'reinicia'. k arranca en 0 y se repetira ese loop hasta que la condicion k<i se cumple, cuando esa condicion se cumple se corta y ahi vuelve al outer loop donde i incrementa su valor por uno, se repite de nuevo el inner loop y asi sucesivamente hasta que la condicion de i, en este caso i<=30, se cumple  y se termina el bucle :)