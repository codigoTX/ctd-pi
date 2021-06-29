// MÓDULO 2 - EXERCÍCIO 05
// ASSUNTO: ARROW FUNCTIONS 
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05

/*--------------------------Arrow Functions (com parâmetros)---------------------------*/ 

let FizzBuzz = (num1, num2) => {
  for(let i=1; i<=100; i++){
    if(i%num1 === 0 && i%num2 !== 0){
      console.log("Fizz");
    }
    else if(i%num2 === 0 && i%num1 !== 0){
      console.log("Buzz");
    }
    else if(i%num1 === 0 && i%num2 === 0){
      console.log("FizzBuzz");
    }
    else{
      console.log(i);
    }
  }
}  
FizzBuzz(8, 7);

/*---------------------------------------FORMA DINÂMICA(EXTRA)---------------------------------------*/
// let FizzBuzz = (num1, num2) => {

//   var phrase;

//   for(let i=1; i<=100; i++){
//     if(i%num1 === 0 && i%num2 !== 0){
//       phrase = "O número "+i+" é múltiplo de "+num1;
//     }
//     else if(i%num2 === 0 && i%num1 !== 0){
//       phrase = "O número "+i+" é múltiplo de "+num2;
//     }
//     else if(i%num1 === 0 && i%num2 === 0){
//       phrase = "O número "+i+" é múltiplo do número "+num1+" e do número "+num2;
//     }
//     else{
//       phrase = i;      
//     }
//     console.log(phrase);
//   }    
// }  
// FizzBuzz(12, 19);