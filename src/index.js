import validator from "./validator.js";

//esta funcion contiene las variables para revesar nuestro valor

let botonValidar=document.getElementById('validate');
botonValidar.onclick= darClick;

function darClick(){
  let creditCardNumber = document.getElementById('numeroDeTarjeta').value; // 123
  //console.log(IngresarNumeroTar);
  console.log(creditCardNumber);
  
  let tarjetaEsValida = validator.luhnAlgorithm(creditCardNumber);
}



 
 
// console.log (creditNumber);
// console.log(invertirNumero(creditNumber));




//console.log(validator)//

