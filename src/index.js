//import validator from './validator.js';

//console.log(validator);


function invertirNumero(numero){
    let stringNumber = numero.toString();
    
    let arrayNumber = stringNumber.split('');

    let reverseArrayNumber = arrayNumber.reverse()
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
   // console.log("Array pos 2 -->" , arrayNumber[2] )

    


    //let result = Number(reverseNumber) 

    return ""   
    
    
}
    
let valor = 4356789024517953;


//console.log (valor);

let reverseCardNumber = invertirNumero(valor);


//console.log ('resultado -->' , reverseCardNumber);

// convertir a array
// recorrer este array en un for e imprimir en cada iteracion la posicion y su valor 




    


//let mensaje = "esto, es, un, mensaje Hola!"
//let splitMensaje = mensaje.split(',')
//console.log(splitMensaje)
