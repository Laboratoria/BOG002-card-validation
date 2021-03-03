import validator from "./validator";

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


//console.log(validator)//

<<<<<<< HEAD
=======
console.log(validator);


    
let creditCardNumber = 4356789024517953;




let reverseCardNumber = validator.luhnAlgorithm(creditCardNumber);

console.log ('resultado -->' , reverseCardNumber);

let botonValidar = document.getElementById("validate");
botonValidar.onclick = darClick;



 function darClick(){
    let IngresarNumero= document.getElementById("numeroDeTarjeta").value;
    console.log(nombre);

  }


    


//let mensaje = "esto, es, un, mensaje Hola!"
//let splitMensaje = mensaje.split(',')
//console.log(splitMensaje)
>>>>>>> 5ced9fec0e4ec16c8198fe06cab31b4805c283ef
