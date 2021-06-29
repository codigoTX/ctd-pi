// MÓDULO 1 - MICRO DESAFIO 3.1
// ASSUNTO: FUNÇÕES.
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05.


/*-------------------------------------FUNÇAÕ IMC------------------------------------------------------*/

function calcularIndiceDeMassaCorporal(altura, peso){
  console.log((peso/(altura/100)**2).toFixed(1)+"kg/m²");
}
calcularIndiceDeMassaCorporal(180, 80);