// MÓDULO 2 - MICRO DESAFIO 13
// ASSUNTO: RECURSIVIDADE 
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05


/*--------------Vamos calcular o número fatorial de um valor inteiro.--------------*/ 

  //  const calculaFatorial = num => {
  //    let result=1;
  //    for(i=num; i != 0; i--){
  //    result *= i ;
  //    } 
  //    console.log(result);
  //  }
  //   calculaFatorial(8);


/*-------------------------REESCREVENDO COM RECURSIVIDADE--------------------------*/ 

let calculaFatorial = num => {
  if (num === 0 || num === 1) {
    return 1;
  };
    return num*calculaFatorial(num-1);
}
calculaFatorial(5);