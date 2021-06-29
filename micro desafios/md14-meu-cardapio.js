// MÓDULO 2 - MICRO DESAFIO 14
// ASSUNTO: FUNÇÃO CONSTRUTORA 
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05


/*------------------------------------------MEU CARDÁPIO------------------------------------------*/ 

function Restaurante(nome, cardapio){
  this.nome = nome;
  this.cardapio = cardapio;
  this.entrada = () => console.log(`Bem-vindo ao ${nome}!, o cardápio da semana é 
  ${(cardapio.join(", ")).replace(", ar"," e ar")}`);
}

let restaurante = new Restaurante("Restaurante JS", ["variáveis", "funções", "objetos", "metódos", "array"]);

restaurante.entrada();