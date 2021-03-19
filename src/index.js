
import validator from "./validator.js";


let botonValidar=document.getElementById('validar');//esta variable llama el id 'validate' de nuestro html
botonValidar.onsubmit = darClick;//le damos el evento 'onnclick' a esta variable para que ejecute la función 'darClick'

function darClick(){//esta función se activa con el evento 'onclick' toma el valor y lo procesa en la función isValid
  let numeroDeTarjeta= document.getElementById('idNumeroIngresado').value; //con esta variable llamamos  el valor ingresado en el id 'numeroDeTarjeta'
  numeroDeTarjeta = validator.isValid(numeroDeTarjeta);
  mostrarValidacion(numeroDeTarjeta);
  //la variable tarjetaesvalida se crea para guiar el valor a la carpeta validator. y ejecutar la funcion isValid(algoritmo de Luhn) 
}



document.getElementById("usuario").addEventListener("keyup",digitarNombre); //Llamamos el id'user' del html y le asignamos un evento 'keyup' 
function digitarNombre(){//se crea esta función que permite reflejar el valor en una nueva ubicación (tarjeta)
  let ingresarNombre = document.getElementById("usuario");//esta variable llama el valor del ID'user'
  let nombreTarjeta= ingresarNombre.value;//esta variable guarda el valor del ID'user'
  let labelingresarNombre = document.getElementById("idNombreTarjeta");//esta variable llama el ID 'nombre' para ingresarlo en el label
  labelingresarNombre.innerText = nombreTarjeta;//este label imprime el valor guardado en el ID'nombre'
  
}

let ingresoNumeroForm =document.getElementById("idNumeroIngresado");// creamos una variable para llamar el valor del id de numeroDeTarjeta.
idNumeroIngresado.addEventListener("keyup", restringirTarjeta)// traemos el valor llamado para que cumpla la funcion restringirTarjeta cuando se ejecute  el evento onkey
function restringirTarjeta(){//estta función toma el valor y valida su formato por una expresion regular
 idNumeroIngresado.value = ingresoNumeroForm.value.replace(/\D/g, '');//esta expresión no permite ingresar letras ni expresiones (#$/+) 

}


document.getElementById("idNumeroIngresado").addEventListener("keyup", digitarNumeroTar) //Llamamos el id'numeroDeTarjeta' del html y le asignamos un evento 'keyup'
function digitarNumeroTar(){//se crea esta función que permite reflejar el valor en una nueva ubicación (tarjeta)
  let ingresarNumeroTar= document.getElementById("idNumeroIngresado");//esta variable llama el valor del ID'numeroDeTarjeta'
  let numeroTarjeta =ingresarNumeroTar.value//esta variable guarda el valor del ID'numeroDeTarjeta'
  let reemplazar= validator.maskify(numeroTarjeta)// la varible repl
  let labelingresarNumeroTar = document.getElementById("idNumeroTarjeta");//esta variable llama el ID 'numTar' para ingresarlo en el label
  labelingresarNumeroTar.innerText = reemplazar;//este label imprime el valor guardado en el ID'numTar' y da el formato de la expresion regular
}


