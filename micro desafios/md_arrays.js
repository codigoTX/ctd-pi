//Micro Desafio Arrays
//TURMA 05 - RAFAEL SILVA TEIXEIRA

//PARTE 1 e 2
let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];
console.log(filmes[1]);

for(i=0; i<filmes.length; i++){
  filmes[i] = filmes[i].toUpperCase();
}
console.log(filmes);

//PARTE 3, 4 e 5
let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];

cartoons.pop();

let filmesEcartoons = () => {
  for(i=0; i<cartoons.length; i++){
    filmes.push(cartoons[i]);
  }
}
filmesEcartoons();
console.log(filmes);

//PARTE 6
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];

let diferentes = [];

for(i=0; i<asiaScores.length; i++){
  if(asiaScores[i] != euroScores[i]){
    diferentes.push(filmes[i])
  };
}

console.log(`As notas foram diferentes para os filmes ${diferentes.join(", ").toString().replace(", k"," e k")}`);