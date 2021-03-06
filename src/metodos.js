function digitarNombre(){
    var edValue = document.getElementById("user");
    var s = edValue.value;
    var lblValue = document.getElementById("nombre");
    lblValue.innerText = s;
  
}

function digitarNumeroTar(){
    var edValue = document.getElementById("numeroDeTarjeta");
    var s = edValue.value
    var repl= s.replace(/([0-9]{4})/g,'$1 ');
    var lblValue = document.getElementById("numTar");
    lblValue.innerText = repl;
}


   
   
    