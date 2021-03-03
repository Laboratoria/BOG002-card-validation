import validator from './validator.js'


//esta funcion contiene las variables para revesar nuestro valor
let creditNumber=5775;

let reverseCardNumber= validator.luhnAlgorithm(creditNumber);

console.log('resultado-->', reverseCardNumber);

let botonValidar=document.getElementById('validate');
botonValidar.onclick= darClick;

function darClick(){
  let IngresarNumeroTar=document.getElementById('numero tarjeta'.value);
  console.log(IngresarNumeroTar);
}


 
 
 console.log (valor);
 console.log(invertirNumero(valor));

 
//import validator from './validator.js'//


function darClick(){
    let IngresarNumeroTar= document.getElementById("numeroDeTarjeta").value;
    console.log(IngresarNumeroTar);

}


    


//let mensaje = "esto, es, un, mensaje Hola!"
//let splitMensaje = mensaje.split(',')
//console.log(splitMensaje)
