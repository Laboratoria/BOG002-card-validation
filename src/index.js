
import validator from "./validator.js";


let botonValidar=document.getElementById('validate');//esta variable llama el id 'validate' de nuestro html
botonValidar.onclick= darClick;//le damos el evento 'onnclick' a esta variable para que ejecute la función 'darClick'

function darClick(){//esta función se activa con el evento 'onclick' toma el valor y lo procesa en la función isValid
  let creditCardNumber = document.getElementById('numeroDeTarjeta').value; //con esta variable llamamos  el valor ingresado en el id 'numeroDeTarjeta'
  let tarjetaEsValida = validator.isValid(creditCardNumber);//la variable tarjetaesvalida se crea para guiar el valor a la carpeta validator. y ejecutar la funcion isValid(algoritmo de Luhn) 
}




document.getElementById("user").addEventListener("keyup",digitarNombre); //Llamamos el id'user' del html y le asignamos un evento 'keyup' 
function digitarNombre(){//se crea esta función que permite reflejar el valor en una nueva ubicación (tarjeta)
  let nombre = document.getElementById("user");//esta variable llama el valor del ID'user'
  let nombreTarjeta= nombre.value;//esta variable guarda el valor del ID'user'
  let lblnombre = document.getElementById("nombre");//esta variable llama el ID 'nombre' para ingresarlo en el label
  lblnombre.innerText = nombreTarjeta;//este label imprime el valor guardado en el ID'nombre'
  
}

let numeroDeTarjeta =document.getElementById("numeroDeTarjeta");// creamos una variable para llamar el valor del id de numeroDeTarjeta.
numeroDeTarjeta.addEventListener("keyup", restringirTarjeta)// traemos el valor llamado para que cumpla la funcion restringirTarjeta cuando se ejecute  el evento onkey
function restringirTarjeta(){//estta función toma el valor y valida su formato por una expresion regular
 numeroDeTarjeta.value = numeroDeTarjeta.value.replace(/\D/g, '');//esta expresión no permite ingresar letras ni expresiones (#$/+) 

}


document.getElementById("numeroDeTarjeta").addEventListener("keyup", digitarNumeroTar) //Llamamos el id'numeroDeTarjeta' del html y le asignamos un evento 'keyup'
function digitarNumeroTar(){//se crea esta función que permite reflejar el valor en una nueva ubicación (tarjeta)
  let numberCard= document.getElementById("numeroDeTarjeta");//esta variable llama el valor del ID'numeroDeTarjeta'
  let numeroTarjeta =numberCard.value//esta variable guarda el valor del ID'numeroDeTarjeta'
  let repl= validator.maskify(numeroTarjeta)
  let lblValue = document.getElementById("numTar");//esta variable llama el ID 'numTar' para ingresarlo en el label
  lblValue.innerText = repl;//este label imprime el valor guardado en el ID'numTar' y da el formato de la expresion regular
}






