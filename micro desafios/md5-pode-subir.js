// MÓDULO 1 - MICRO DESAFIO 5
// ASSUNTO: CONDICIONAIS. 
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05


/*-------------------------------------PODE SUBIR------------------------------------------------------*/

let situacao;

function podeSubir(altura, acompanhada){
  //Situação A
  if(altura>1.40 && altura<2){     
    situacao = "Pode subir!";
    return true;
  }
  //Situação B  
  else if (altura>=1.20 && altura<1.40 && acompanhada){    
    situacao = "Pode subir acompanhada por um responsável!";
    return true;
  }
  //Situação C
  else{
    situacao = "Não pode subir pois não atendeu aos requisitos!";
    return false;
  }
}
podeSubir(1.20, false);

console.log(situacao);