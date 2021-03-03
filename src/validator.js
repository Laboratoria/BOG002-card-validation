
const validator = {
  luhnAlgorithm,
  
};

function invertirNumero (numero) {
  let stringNumber = numero.toString( );//cadena de caracteres en formato numero (toString encadena)
  let arrayNumber = stringNumber.split('');//array es un conjunto de datos en formato numero/split divide la cadena de caracteres
  let reverseArrayNumber=arrayNumber.reverse();//aplicamos la funcion reverse a nuestro array
 return reverseArray;
}


function luhnAlgorithm(numero){
  let reverseArrayNumber = invertirNumero(numero);
  console.log("Reverse Array -->", reverseArrayNumber);

 }



   for (let i=0; i < reverseArrayNumber.length; i++) {//condicional, con variable de control
   console.log('posicion-->',i, 'val->', reverseArrayNumber[i]);

   let validarnumeros=i%2;//si el residuo es = a 0 es par, si el residuo es = a 1 es impar

    if (validarnumeros===0){//si el residuo es = a 0 cumple la condicion if
        console.log('la posicion:',i, 'es par');
       let valor = reverseArrayNumber[i];//llamamos nuestro numero reversado, identificando sus posiciones 
       let valorx2 = valor*2;// las que cumplen condición par se multiplican x2         
      
         if(valorx2>=10){//condicionamos, si el resultado es >= a diez
           console.log (valorx2);//resultado de las multiplicaciones
           let num1= Number (valorx2.toString().split('')[0]);//separamos valores del resultado con "split" 
           let num2= Number (valorx2.toString().split('')[1]);
           console.log('num1',num1);
           console.log('num2',num2);
           let sumaNum=num1+num2;//suma los digitos resultados de la multiplicación
           reverseArrayNumber[i]=sumaNum;//llamamos nuestra cadena de caracteres reversada que cumple la condición
       
          }
         else {reverseArrayNumber[i]=valorx2;
           console.log=valorx2    
            }
          

  for (let i = 0; i < reverseArrayNumber.length; i++){
     resultadoSuma = resultadoSuma + Number(reverseArrayNumber[i]); // 6,5,6
      
    }

  //let result = Number(reverseNumber) 

  return resultadoSuma
  
 
  
    }
     console.log("array con validacion de pares->",reverseArrayNumber);
   
     let resultadoSuma=0;
     for (let i= 0; i < reverseArrayNumber.length; i++) {
     resultadoSuma = resultadoSuma+ Number(reverseArrayNumber[i]);
     }
    
     
     //let sumaArray= reverseArrayNumber.reduce((acc,item)=>{
      // return acc = acc+item;
     
  
  console.log(resultadoSuma)    
  return''


}
export default validator;
