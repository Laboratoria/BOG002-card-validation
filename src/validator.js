const validator = {
  isValid,
  
};



function invertirNumero(numero){//esta funcion invierte el numero ingresado
  
  let arrayNumber = numero.split('');//la variable array guarda el conjunto de números, split nos permite separar la cadena de caracteres y utilizamos una cadena vacía ("") como separador y la cadena se divide entre cada carácter.

  let reverseArray = arrayNumber.reverse(); //nuestra Array se reversa con la propiedad .reverse 

  return reverseArray; // nos retorna nuestra array en reversa
}




function isValid(number){// la función isValid, hace referencia al algoritmo de Luhn. Trae las condiones que nos permite validar el algoritmo.

  let reverseArrayNumber = invertirNumero(number);// esta variable nos permite traer el nuestros numeros invertidos

  for (let i = 0; i <= reverseArrayNumber.length -1 ; i++) { //Se crea un for para tomar cada valor de nuestra array
    //console.log("posicion --->", i , ' val ->' , reverseArrayNumber[i]) 
    let validarnumeros = i%2; //residuo de la posicion dividido en 0 (0 par 1 impar)
     
    if(validarnumeros === 0 ){ //condicionamos el valor de nuestro residuo que es igual a cero y nos indica las posiciones pares
     // console.log('la posicion : ', i , 'es PAR');
         
      let valor = reverseArrayNumber[i]; //en la varible valor identficamos las nuevas posiciones 

      let valorx2 = valor*2; // los nuevos valores que cumplen las posiciones pares se multiplican por dos
              
      if(valorx2 >= 10){// Si, la multiplicacion de los valores pares son mayor o igual a 10 se debe desglosar el numero y sumar
        // console.log(valorx2)
        let num1 = Number(valorx2.toString().split('')[0]);//se suma num1 con
        let num2 = Number(valorx2.toString().split('')[1]);//num 2

        console.log('num1 -> ', num1);
        console.log('num2 -> ', num2);
              
        let sumaNume= num1 + num2; // resultado de los numeros desglozados
        reverseArrayNumber[i] = sumaNume; // llos resultados de la suma se posicionan en la reverseArrayNumber
          
      }else {
        reverseArrayNumber[i] = valorx2; // las multiplicaciones menores de 10, se quedan fijos en la reverseArrayNumber
      }
         
    }
    console.log("Posicion "+ i +" valor --> "+ reverseArrayNumber[i]);

  }
  console.log("Array con validacion de pares --> ", reverseArrayNumber);
  //console.log("Array pos 2 -->" , arrayNumber[2] )

  let resultadoSuma = 0;// Se crea la variabe resultadoSuma para guardar la suma total de la array
  for (let i = 0; i < reverseArrayNumber.length; i++){
    resultadoSuma = resultadoSuma + Number(reverseArrayNumber[i]); // 6,5,6
      
  }  

  let resultadoFinal=resultadoSuma%10; // la variable resultado final, guarda el resultado de la suma total obtenida y se realiza una dvisión sintetica para obtener el multiplo de 10
  console.log('resultado suma -> ', resultadoSuma);
  console.log('resultado Final -> ', resultadoFinal);

  if (resultadoSuma%10===0){//Si cumple la condición el resultado será true
    console.log('Valida');
    alert("Tu tarjeta es válida")
    return true; 
  }
  else{ 
    console.log('Tarjeta no valida');// si no cumple la condición será flase
    alert("Tarjeta invalida, vuelva a intentarlo")
    return false;
  }
  

  
  


}
export default validator;
