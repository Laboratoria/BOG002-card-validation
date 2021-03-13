const validator = {
  isValid,
  maskify,
  
};

 
 function maskify(creditCardNumber){//se crea esta función que permite reflejar el valor en una nueva ubicación (tarjeta)
 let maskifyString= creditCardNumber.replace(/.(?=.{4})/g, "#");//esta variable toma creditCardNumber y reemplaza su formato con la expresion regular dada

 return maskifyString
 }

  

function invertirNumero(numero){//esta funcion invierte el numero ingresado
  
  let arrayNumber = numero.split('');//la variable array guarda el conjunto de números, split nos permite separar la cadena de caracteres y utilizamos una cadena vacía ("") como separador y la cadena se divide entre cada carácter.

  let reverseArray = arrayNumber.reverse(); //nuestra Array se reversa con la propiedad .reverse 

  return reverseArray; // nos retorna nuestra array en reversa
}




function isValid(numero){// la función isValid, hace referencia al algoritmo de Luhn. Trae las condiones que nos permite validar el algoritmo.

  let reverseArrayNumber = invertirNumero(numero);// esta variable nos permite traer el nuestros numeros invertidos

  for (let i = 0 ; i <= reverseArrayNumber.length -1 ; i++) { //Se crea un for para tomar cada valor de nuestra array
    
    let posicion= i+1;//se crea una variable donde sumamos una posicion para tome el primer digito como posicion 1 en el array
    let validarnumeros = posicion%2; //residuo de la posicion dividido en 0 (0 par 1 impar)
     
    if(validarnumeros === 0 ){ //condicionamos el valor de nuestro residuo que es igual a cero y nos indica las posiciones pares
         
      let valor = reverseArrayNumber[i]; //en la varible valor identficamos las nuevas posiciones 

      let valorx2 = valor*2; // los nuevos valores que cumplen las posiciones pares se multiplican por dos
              
      if(valorx2 >= 10){// Si, la multiplicacion de los valores pares son mayor o igual a 10 se debe desglosar el numero y sumar

        let num1 = Number(valorx2.toString().split('')[0]);//se suma num1 con
        let num2 = Number(valorx2.toString().split('')[1]);//num 2

              
        let sumaNumeros= num1 + num2; // resultado de los numeros desglozados
        reverseArrayNumber[i] = sumaNumeros; // llos resultados de la suma se posicionan en la reverseArrayNumber
          
      }else {
        reverseArrayNumber[i] = valorx2; // las multiplicaciones menores de 10, se quedan fijos en la reverseArrayNumber
      }
         
    }

  }

  let resultadoSuma = 0;// Se crea la variabe resultadoSuma para guardar la suma total de la array
  for (let i = 0; i < reverseArrayNumber.length; i++){
    resultadoSuma = resultadoSuma + Number(reverseArrayNumber[i]); // 6,5,6
      
  }  
  console.log(resultadoSuma);
  
  let resultadoFinal=resultadoSuma%10; // la variable resultado final, guarda el resultado de la suma total obtenida y se realiza una dvisión sintetica para obtener el multiplo de 10

  if (resultadoFinal%10===0){//Si cumple la condición el resultado será true
    //arlert("Tu tarjeta es valida")
   console.log(true);
   return true;
   
  }
   

  else{ 
    // si no cumple la condición será flase
    console.log(false)
    //alert ("Tarjeta no valida, vuelve a intentarlo")
    return false;
  }
   
  
  


}

export default validator;

