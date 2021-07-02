// MÓDULO 2 - CHECKPOINT 2 
// ALUNO: RAFAEL SILVA TEIXEIRA - TURMA 05.

/*******************************************************************************************************/
/*--------------------------------MICROONDAS----------------------------------*/

// Para utilizar o Microondas JS, siga as orientações abaixo. 
// 1 - Pipoca – 10 segundos;
// 2 - Macarrão – 8 segundos;
// 3 - Carne – 15 segundos;
// 4 - Feijão – 12 segundos;
// 5 - Brigadeiro – 8 segundos;


// PIPOCA
let microondas = (food, customTimer) => {
  if(food === 1){
    let popcorn = (defaultTimer = 1000) => { 
      if (customTimer != defaultTimer && customTimer != null){
        defaultTimer = customTimer;
      }     
      if(defaultTimer > 2000 && defaultTimer < 3000){
        console.log("A pipoca queimou!");
      }
      else if(defaultTimer >= 3000){
        console.log("Kabumm!");
      }
      else if(defaultTimer > customTimer){
        console.log("Tempo insuficiente!");
      }
      else{
        console.log("A pipoca está pronta, bom apetite!!!");
      }      
    }    
    setTimeout(popcorn, customTimer); 
  }  

  // MACARRÃO
  if(food === 2){
    let noodle = (defaultTimer = 800) => { 
      if (customTimer != defaultTimer && customTimer != null){
        defaultTimer = customTimer;
      }     
      if(defaultTimer > 1600 && defaultTimer < 2400){
        console.log("O macarrão queimou!");
      }
      else if(defaultTimer >= 2400){
        console.log("Kabumm!");
      }
      else if(defaultTimer > customTimer){
        console.log("Tempo insuficiente!");
      }
      else{
        console.log("O macarrão está pronto, bom apetite!!!");
      }      
    }    
    setTimeout(noodle, customTimer) 
  }  
  
//CARNE
if(food === 3){
  let meat = (defaultTimer = 1500) => { 
    if (customTimer != defaultTimer && customTimer != null){
      defaultTimer = customTimer;
    }     
    if(defaultTimer > 3000 && defaultTimer < 4500){
      console.log("A carne queimou!");
    }
    else if(defaultTimer >= 4500){
      console.log("Kabumm!");
    }
    else if(defaultTimer > customTimer){
      console.log("Tempo insuficiente!");
    }
    else{
      console.log("A carne está pronta, bom apetite!!!");
    }      
  }    
  setTimeout(meat, customTimer) 
}

//BEAN
if(food === 4){
  let bean = (defaultTimer = 1200) => { 
    if (customTimer != defaultTimer && customTimer != null){
      defaultTimer = customTimer;
    }     
    if(defaultTimer > 2400 && defaultTimer < 3600){
      console.log("O feijão queimou!");
    }
    else if(defaultTimer >= 3600){
      console.log("Kabumm!");
    }
    else if(defaultTimer > customTimer){
      console.log("Tempo insuficiente!");
    }
    else{
      console.log("O feijão está pronto, bom apetite!!!");
    }      
  }    
  setTimeout(bean, customTimer) 
}

//CHOCOLAT BALL
if(food === 5){
  let chocolatBall = (defaultTimer = 800) => { 
    if (customTimer != defaultTimer && customTimer != null){
      defaultTimer = customTimer;
    }     
    if(defaultTimer > 1600 && defaultTimer < 3200){
      console.log("O brigadeiro queimou!");
    }
    else if(defaultTimer >= 3200){
      console.log("Kabumm!");
    }
    else if(defaultTimer > customTimer){
      console.log("Tempo insuficiente!");
    }
    else{
      console.log("O brigadeiro está pronto, bom apetite!!!");
    }      
  }    
  setTimeout(chocolatBall, customTimer);
}
    if(food < 1 || food > 5){
      console.log("Opção de prato inexistente, escolha uma opção entre 1 e 5.");
    }
}

//Defina entre os parentes abaixo a opção de comida e tempo que deseja(em milisegundos).
microondas(1, 2000);