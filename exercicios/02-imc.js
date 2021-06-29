// MÓDULO 1 - EXERCÍCIO 2 
// ASSUNTO: OPERADORES ARITMÉTICOS
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05.

/*******************************************************************************************************/
/*------------------------------------CALCULADORA IMC--------------------------------------------------*/

const nome = "Aline";
let idade = 33;
let peso = 63.7;
let altura = 1.53;
let plano = null;
let imc = (peso/(altura)**2).toFixed(1)

console.log(nome+" tem "+idade+" anos e seu índice de massa corporal é de "+imc+" kg/m².");