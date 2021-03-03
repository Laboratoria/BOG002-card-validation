import validator from "./validator.js";

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


 
 
 console.log (creditNumber);
 console.log(invertirNumero(creditNumber));




console.log(validator)//

