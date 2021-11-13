// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
let resultado=''
do {
    let cadena=prompt('Escriba su frase');
if (resultado==''){
    resultado= cadena+resultado
}else resultado= resultado+'-'+cadena;


}while (confirm("Desea seguir?"));
document.write(resultado)

