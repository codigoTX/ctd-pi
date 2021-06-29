// MÓDULO 1 - MICRO DESAFIO 10
// ASSUNTO: LOOPS. 
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05


/*--------------------------Percorra o array abaixo e exiba seus elementos---------------------------------*/ 
const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];

for(i=0; i<pontos.length; i++){
  //console.log(pontos[i]);
}

/*---------Crie um array com valores diversos, percorra-o, altere e mostre seus elementos------------------*/ 
const valoresDiversos = [12, 564, 6574, 678, 28];

for(i=0; i<valoresDiversos.length; i++){
  console.log(valoresDiversos[i] + "_alterado na exbição");
}

/*-------------------Crie outro array, percorra-o, altere, salve e exiba seus elementos---------------------*/
let outroArray = ["a", "b", "c", "d", "e"];

for(i=0; i<outroArray.length; i++){
  outroArray[i] += "_alterado e salvo";  
}
console.log(outroArray);


/*-----------------Crie um último array, percorra-o, selecione os elementos, salve e mostre-os---------------*/
let ultimoArray = ["maçã", "banana", "limão", "laranja"];
let salvos = [];
for(i=0; i<ultimoArray.length; i++){
  salvos.push(ultimoArray[i]);
}

console.log(salvos);