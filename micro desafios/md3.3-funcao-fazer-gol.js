// MÓDULO 1 - MICRO DESAFIO 3.3
// ASSUNTO: FUNÇÕES.
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05.


/*-----------------------------------------FUNÇÃO FAZER GOL--------------------------------------------*/

let nomeJogador = "Rafael";
let golsJogador = 0;
let precoEmDolares = 250000;

function fazerGol(){
  golsJogador++;
  console.log("GOL!!!!!!!!!");
  precoEmDolares = precoEmDolares+10000;
}
fazerGol();
console.log("O jogador marcou", +golsJogador+" "+"gol na partida de ontem, e agora está avaliado em $"+precoEmDolares);


/*-----------------------------------------FUNÇÃO HAT-TRICK--------------------------------------------*/

let novoPreco = 0;
function hatTrick(){
  fazerGol();
  novoPreco = precoEmDolares + ((precoEmDolares/100)*10);
  console.log("Depois de marcar o primeiro gol na partida, o valor do jogador"+" "+nomeJogador, "subiu para"+" $"+novoPreco);

  fazerGol();
  novoPreco = novoPreco + ((precoEmDolares/100)*10);
  console.log("Após marcar o segundo gol, o valor do jogador"+" "+nomeJogador, "subiu para"+" $"+novoPreco);

  
  fazerGol();
  novoPreco = novoPreco + ((precoEmDolares/100)*10);
  console.log("Ao marcar o hat-trick, o valor de"+" "+nomeJogador, "subiu para"+" $"+novoPreco);

}
hatTrick();