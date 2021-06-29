// MÓDULO 2 - MICRO DESAFIO 12
// ASSUNTO: FUNÇÃO CALLBACK. 
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05


/*---------------(Terceirizando funções)----------------*/ 

let acaoCarro = (acao1, acao2) => {
  acao1();
  acao2();
};

let andar = () => console.log("O carro está andando!");
let parar = () => console.log("O carro parou!");

acaoCarro(andar, parar);