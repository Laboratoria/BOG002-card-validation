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
  
 // document.getElementById("numeroDeTarjeta").addEventListener("onclick",datos)
  
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
