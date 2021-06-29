let soma = (numA, numB) => console.log(numA+numB);

let subtracao = (numA, numB) => console.log(numA-numB);

let multiplicacao = (numA, numB) => console.log(numA*numB);

let divisao = (numA, numB) => {
  if(numB != 0){
    console.log(numA/numB);
  }
  else{
    console.log("Impossível dividir por 0!");
  }
};

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao
};