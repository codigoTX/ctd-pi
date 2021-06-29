// MÓDULO 2 - EXERCÍCIO 6.2
// ASSUNTO: OBJETOS LITERAIS
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05

/*------------------------------------------(Calcular notas)------------------------------------------*/
// TENTEI UTILIZAR A MAIORIA DAS COISAS QUE ESTUDAMOS ATÉ AQUI E FICOU MEIO EMBOLADO, 
// MAS ESTÁ FUNCIONANDO! KKKKKKKKKKK 

let aluno = {
  nome: "Rafael Teixeira",
  numArq: 123,
  notas: [7, 8, 9],
  media: () => {
    return (aluno.notas[0]+aluno.notas[1]+aluno.notas[2])/3;
  },
  situacao: () => {
    if(aluno.media() >= mediaAprova){
      console.log(`O aluno ${aluno.nome}, matrícula nº ${aluno.numArq}, está aprovado com média ${aluno.media()}!`);
    }
    else{
      console.log(`O aluno ${aluno.nome}, matrícula nº ${aluno.numArq}, está reprovado com média ${aluno.media()}.`);
    }
  }
}
const mediaAprova = 7;

aluno.situacao();
