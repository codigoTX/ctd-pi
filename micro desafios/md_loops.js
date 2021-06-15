//Exercício “Praticando com Loops”
//TURMA 05 - RAFAEL SILVA TEIXEIRA

//1. Repetir como um papagaio
for(i=1; i<5; i++){
  console.log("Olá mundo");
}

//2. Contando números ímpares
for(i=1; i<10; i++){
  if(i%2 !== 0){
    console.log(i);
  }
}

//3. Criando a tabuada

for(i=1; i<=9; i++){
  for(a=1; a<=9; a++){
    console.log(`${i} x ${a} = ${i*a}`);
  }
}