// MÓDULO 2 - EXERCÍCIO 6.1
// ASSUNTO: OBJETOS LITERAIS
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05

/*------------------------------------------(ITENS 1, 2, E 3)------------------------------------------*/

//   let conta1 = {
//     numeroConta: 123456,
//     saldo: 1000,
//     titular: "Fulano de tal",
//     deposito: function (depValor){
//       this.saldo += depValor;
//       console.log(`Olá Sr.(a) ${this.titular}, depóstio no valor de ${depValor.toLocaleString('pt-BR')} realizado com sucesso! 
//       o saldo da sua conta era R$ ${(this.saldo-depValor).toLocaleString('pt-BR')}, 
//       e com esse depósito passou para R$ ${(this.saldo).toLocaleString('pt-BR')}`)
//     },
//     saque: function (saqueValor){    
//       if(this.saldo < saqueValor){
//         console.log(`Saldo insuficiente! o valor máximo permitido é R$ ${(this.saldo).toLocaleString('pt-BR')}`)
//       }
//       else{
//         this.saldo -= saqueValor;
//         console.log(`Saque de R$ ${saqueValor.toLocaleString('pt-BR')} realizado com sucesso, 
//         o saldo restante é R$ ${(this.saldo).toLocaleString('pt-BR')}`);
//       }
//     }
//   };

// conta1.deposito(500);
// conta1.saque(2000);


/*------------------------------------------(ITENS 4 E 5)------------------------------------------*/

function Conta (numeroConta, saldo, titular, deposito, saque) {
  this.numeroConta = numeroConta;
  this.saldo = saldo;
  this.titular = titular;
  this.deposito = () => {
    this.saldo += depValor;
    console.log(`Olá Sr.(a) ${this.titular}, depóstio no valor de ${depValor.toLocaleString('pt-BR')} realizado com sucesso! 
    o saldo da sua conta era R$ ${(this.saldo-depValor).toLocaleString('pt-BR')}, 
    e com esse depósito passou para R$ ${(this.saldo).toLocaleString('pt-BR')}`)
  },
  this.saque = function (saqueValor){    
    if(this.saldo < saqueValor){
      console.log(`Saldo insuficiente! o valor máximo permitido é R$ ${(this.saldo).toLocaleString('pt-BR')}`)
    }
    else{
      this.saldo -= saqueValor;
      console.log(`Saque de R$ ${saqueValor.toLocaleString('pt-BR')} realizado com sucesso, 
      o saldo restante é R$ ${(this.saldo).toLocaleString('pt-BR')}`);
    }
  }
}

let conta2 = new Conta("78945-6", 60000, "Rafael");

conta2.saque(200);

/*******************************************************************************************************/