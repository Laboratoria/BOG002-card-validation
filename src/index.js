
import validator from "./validator.js";
//import * as validator from "./validator.js";

//esta funcion contiene las variables para revesar nuestro valor
//alert('prueba call')

let numeroDeTarjeta =document.getElementById("numeroDeTarjeta");
numeroDeTarjeta.addEventListener("keyup", restringirTarjeta)
function restringirTarjeta(){
numeroDeTarjeta.value = numeroDeTarjeta.value.replace(/\D/g, '');

}
console.log(numeroDeTarjeta);



let botonValidar=document.getElementById('validate');
botonValidar.onclick= darClick;

function darClick(){
  let creditCardNumber = document.getElementById('numeroDeTarjeta').value; // 123
  let nombre = document.getElementById('nombre');

  console.log(nombre)
  
  let tarjetaEsValida = validator.isValid(creditCardNumber)
}

document.getElementById("user").addEventListener("keyup",digitarNombre);

function digitarNombre(){
  var edValue = document.getElementById("user");
  var s = edValue.value;
  var lblValue = document.getElementById("nombre");
  lblValue.innerText = s;
  
}
   document.getElementById("numeroDeTarjeta").addEventListener("keyup", digitarNumeroTar)
  
  function digitarNumeroTar(){
    var edValue = document.getElementById("numeroDeTarjeta");
    var s = edValue.value
    var repl= s.replace(/([0-9]{4})/g,'$1 ');
    var lblValue = document.getElementById("numTar");
    lblValue.innerText = repl;
  }

  
