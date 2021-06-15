//EXERCÍCIO 01
function calcularIndiceDeMassaCorporal(altura, peso){
  console.log((peso/(altura/100)**2).toFixed(2));
}
calcularIndiceDeMassaCorporal(180, 80);