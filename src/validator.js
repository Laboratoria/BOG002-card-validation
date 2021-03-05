const validator = {
  luhnAlgorithm,

};


function invertirNumero(numero){
  let stringNumber = numero.toString();
  
  let arrayNumber = stringNumber.split('');

  let reverseArray = arrayNumber.reverse();

  return reverseArray;
}


function luhnAlgorithm(numero){

  let reverseArrayNumber = invertirNumero(numero);

  console.log("Reverse Array --> ", reverseArrayNumber);

  //let reverseNumber = reverseArrayNumber.join('');
  //console.log("joinReverseNumber -->" , reverseNumber)

  for (let i = 0; i <= reverseArrayNumber.length -1 ; i++) {
      console.log("posicion --->", i , ' val ->' , reverseArrayNumber[i])
      let validarnumeros = i%2; //residuo de la posicion dividido en 0 (0 par 1 impar)
     
      if(validarnumeros === 0 ){
         
         // console.log('la posicion : ', i , 'es PAR');
         
          let valor = reverseArrayNumber[i];

          let valorx2 = valor*2;
              
          if(valorx2 >= 10){
              // se debe desglosar el numero y sumar
              // console.log(valorx2)
              let num1 = Number(valorx2.toString().split('')[0]);
              let num2 = Number(valorx2.toString().split('')[1]);

              console.log('num1 -> ', num1);
              console.log('num2 -> ', num2);
              
              let sumaNume= num1 + num2;

              reverseArrayNumber[i] = sumaNume;
          
          }else {
              reverseArrayNumber[i] = valorx2;
          }
         
      }
      console.log("Posicion "+ i +" valor --> "+ reverseArrayNumber[i]);

  }
  console.log("Array con validacion de pares --> ", reverseArrayNumber);
  //console.log("Array pos 2 -->" , arrayNumber[2] )

  let resultadoSuma = 0;

  for (let i = 0; i < reverseArrayNumber.length; i++){
      resultadoSuma = resultadoSuma + Number(reverseArrayNumber[i]); // 6,5,6
      
   
  }  
  let resultadoFinal=Boolean
  resultadoFinal =resultadoSuma%10;

  console.log('resultado suma -> ', resultadoSuma);
  console.log('resultado Final -> ', resultadoFinal);



  
  if (resultadoSuma%10===0){
     console.log('Valida');
     return true;
     }else{ 
     console.log('Tarjeta no valida');
     return false;
   }
    return false;// si el usuario no ingresa un valor en este campo, se retornara un false.
}



export default validator;
