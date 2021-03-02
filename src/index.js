import validator from './validator.js';

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
