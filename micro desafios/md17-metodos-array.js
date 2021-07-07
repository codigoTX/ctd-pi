// MÓDULO 2 - MICRO DESAFIO 16
// ASSUNTO: MÉTODOS DE ARRAY
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05


/*---------------------------------MAP---------------------------------*/

const evenNumbers = ["2", "4", "6", "8"];

let oddNumbers = evenNumbers.map(item => item -1);

//console.log(oddNumbers);

/*---------------------------------FILTER---------------------------------------------------*/

let names = ["Rafael", "Maria", "Maria", "Christopher", "Silvia"];

let sameNames = names.filter(item => item === "Maria");

//console.log(sameNames);

/*---------------------------------REDUCE--------------------------------------------------*/

let numbers = [1, 2, 3, 4, 5, 6, 7];

// NÃO CONSEGUI RESOLVER AINDA.

/*---------------------------------FOREACH--------------------------------------------------*/

let animals = ["cachorro", "gato", "leão", "tartaruga"];

animals.forEach((item) => {
  console.log("O animal é o "+item);
  //console.log(`O animal é o ${this.index}`);
});

