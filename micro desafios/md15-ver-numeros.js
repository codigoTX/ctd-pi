// MÓDULO 2 - MICRO DESAFIO 15
// ASSUNTO: SPREAD E REST
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05


/*---------------------------------VER NÚMERO---------------------------------*/
//PARTE 1
let numerosPrimos = [2, 3, 5, 7, 11];

let numeros = [...numerosPrimos, 1, 4, 6, 8, 9, 10];

//console.log(numeros);


//PARTE 2
const mostrarNumero = (...params) => console.log(Math.max(...params));

mostrarNumero(22, 3, 45, 1, 78, 99, 2);