

import validator from "./validator.js";

//esta funcion contiene las variables para revesar nuestro valor

function datos(){
  var user,telefono,email,numeroDeTarjeta;
   user = document.getElementById("user").value;
   telefono = document.getElementById("telefono").value;
   email = document.getElementById("email").value;
   numeroDeTarjeta = document.getElementById("numeroDeTarjeta").value;
   expresion = /^[0-9]{0,16}$/;

   if (user==="" || telefono ==="" || email ==="" || numeroDeTarjeta ===""){
    alert("Debes ingresar todos los datos")
    return false;
    
   }

   if (!expresion.test(numeroDeTarjeta)){
     alert("Ingrese el número de su tarjeta")
   return false;
   }
  }

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



 
 
