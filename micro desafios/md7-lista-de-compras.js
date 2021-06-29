// MÓDULO 1 - MICRO DESAFIO 7
// ASSUNTO: MÉTODOS DE ARRAY. 
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05


/*---------------------------------------LISTA DE COMPRAS----------------------------------------------*/

let produtos = ["ventoinha", "processador", "gabinete", "mouse", "monitor", "teclado"];

console.log("O método 'join' separa os itens do array com o separador definido entre os parêntes e aspas, caso deixe em branco, será utilizado a vírgula por padrão.");
console.log(produtos.join("/"));

console.log("O método 'pop' remove o último item de um array e retorna esse item.");
console.log(produtos.pop());

console.log("O método 'push' insere iten(s) no final de um array e retorna o tamanho do array atualizado.");
console.log(produtos.push("pendrive"));

console.log("O método 'shift' remove o primeiro item de um array e retorna esse item.");
console.log(produtos.shift());

console.log("O método 'unshift' insere iten(s) no início de um array e retorna o tamanho do array atualizado.")
console.log(produtos.unshift("webcam", "mousepad"));