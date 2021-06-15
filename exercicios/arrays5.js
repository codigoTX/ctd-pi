//Exercício Arrays
//TURMA 05 - RAFAEL SILVA TEIXEIRA

//Compare elementos de um array com elementos de outro array. 

let produtos = ["ventoinha", "processador", "gabinete", "mouse", "monitor", "teclado"];
let produtos2 = ["placa_mae", "processador", "mousepad", "mouse", "monitor", "webcam"];

for(i=0; i<produtos.length; i++){
  if(produtos2.includes(produtos[i]) ? console.log(`O item ${produtos[i]} consta nas duas listas`) : console.log(`O item ${produtos[i]} consta apenas na lista produtos`));
}