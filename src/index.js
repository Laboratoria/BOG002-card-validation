import validator from "./validator.js";

//esta funcion contiene las variables para revesar nuestro valor

//console.log('resultado-->', reverseCardNumber);

let botonValidar=document.getElementById('validate');
botonValidar.onclick= darClick;

function darClick(){
  let creditCardNumber = document.getElementById('numeroDeTarjeta').value; // 123
  //console.log(IngresarNumeroTar);
  console.log(creditCardNumber);
  
  let tarjetaEsValida = validator.luhnAlgorithm(creditCardNumber);
  console.log('la tarjeta es valida ?  -> ', tarjetaEsValida);
}



 
 
// console.log (creditNumber);
// console.log(invertirNumero(creditNumber));




//console.log(validator)//

