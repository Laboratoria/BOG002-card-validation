const validator = {
  isValid,
  maskify,
  
};

 
function maskify(creditCardNumber){//se crea esta función que permite reflejar el valor en una nueva ubicación (tarjeta)
 let maskifyString= creditCardNumber.replace(/.(?=.{4})/g, "#");//esta variable toma creditCardNumber y reemplaza su formato con la expresion regular dada por # 

 return maskifyString //retorna el reemplazo de los digitos por #
}

  

function invertirNumero(numero){//la funcion invertir numero recibe un parametro numero
  
  let arrayNumber = numero.split('');//la variable arrayNumber guarda el arreglo de números, split (nos devuelve un arreglo)nos permite separar la cadena de caracteres y utilizamos una cadena vacía ("") como separador y la cadena se divide entre cada carácter.

  let reverseArray = arrayNumber.reverse(); //nuestra Array se reversa con la propiedad .reverse y se guarda en la variable reverseArray

  return reverseArray; // nos retorna la variable reverseArray (contiene el array invertido)
}




function isValid(number){// esta funcion recibe un parametro numero, la función isValid, hace referencia al algoritmo de Luhn. Trae las condiciones que nos permite validar el algoritmo.

  let reverseArrayNumber = invertirNumero(number);// esta variable almacena lo que nos retorna la funcion invertir numero.
  for (let i = 0 ; i <= reverseArrayNumber.length -1 ; i++) { //Se crea un ciclo  for que va desde la posicion  0hasta la 16 del reverseArray.
    
    let posicion= i+1;//  0+1 se crea una variable donde sumamos una posicion para tomar el primer digito como posicion 1 en el array
    let esPar = posicion%2; //  1%2 -> 1 calcula el residuo del numero que esta guardado en la variable posicion (0 par 1 impar)
     
    if(esPar === 0 ){ //condicionamos el valor de nuestro residuo que es igual a cero y nos indica las posiciones pares
         
        let valor = reverseArrayNumber[i]; //en la varibale valor guardamos el valor de la posicion i

        let valorx2 = valor*2; // el valor que tiene mi posicion lo multiplico por 2, y lo guardo en la varibale valorx2
                
        if(valorx2 >= 10){// Si, la multiplicacion de los valores pares son mayor o igual a 10 se debe romper el numero en dos  y sumarlos

          let num1 = Number(valorx2.toString().split('')[0]);//se parte el valor y lo convieto en un array 
          let num2 = Number(valorx2.toString().split('')[1]);
                
          let sumaNume= num1 + num2; // el resultado de la suma es lo que hay en mi posicion o mas mi posicion 1 de mi array de la multiplicacion.
          reverseArrayNumber[i] = sumaNume; // el resultado de la suma tomo s
            
        }else {
          reverseArrayNumber[i] = valorx2; // lo que hay en el valor dos me lo debe guardar en el reverseArrayNumber...las multiplicaciones menores de 10, no se modifican 
        }
         
    }

  }

  let resultadoSuma = 0;// Se crea la variabe resultadoSuma para guardar la suma total del tamaño del arreglo.
  for (let i = 0; i < reverseArrayNumber.length; i++){ //creamos un ciclo for para
    resultadoSuma = resultadoSuma + Number(reverseArrayNumber[i]); // la varibale resultado suma.
      
  }  
  console.log(resultadoSuma);
  
  let resultadoFinal=resultadoSuma%10; // la variable resultado final, guarda el resultado de la suma total obtenida y se realiza una dvisión sintetica para obtener el multiplo de 10

  if (resultadoFinal%10===0){//Si cumple la condición el resultado será true
   //  console.log(true);
   //  document.getElementById("result").innerHTML='Compra exitosa';
    alert("compra exitosa!");
   return true;
  }
  else{ 
    // si no cumple la condición será flase
    // document.getElementById("result").innerHTML='Compra exitosa';
    // console.log(false)
   alert("Tarjeta invalida, verifica el número");
   return false;
  }
   
  
  


}
export default validator;

