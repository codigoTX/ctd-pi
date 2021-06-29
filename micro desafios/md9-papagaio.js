// MÓDULO 1 - MICRO DESAFIO 9
// ASSUNTO: LOOPS. 
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05

/*------------------(Repetir como um papagaio)-----------------*/ 
for(i=1; i<5; i++){
  console.log("Olá mundo");
}

/*------------------(Contando números ímpare)------------------*/ 
for(i=1; i<10; i++){
  if(i%2 !== 0){
    console.log(i);
  }
}

/*-----------------------(Criando a tabuada)-------------------*/
for(i=1; i<=9; i++){
  for(a=1; a<=9; a++){
    console.log(`${i} x ${a} = ${i*a}`);
  }
}