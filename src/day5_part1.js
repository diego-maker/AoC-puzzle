import fs from 'fs';

fs.readFile('./src/file/day5.txt','utf8', function(err,data){

  let rows = [JSON.stringify(data)]; 
  rows.map(x=>{
    var dataLog = (x.replaceAll('\\r\\n', "/"));
    dataLog = (dataLog.replaceAll('"', ""))
    dataLog = dataLog.split('/')
    let boxes = 
    [
      ['N','T','B','S','Q','H','G','R'],
      ['J','Z','P','D','F','S','H'],
      ['V','H','Z'],
      ['H','G','F','J','Z','M'],
      ['R','S','M','L','D','C','Z','T'],
      ['J','Z','H','V','W','T','M'],
      ['Z','L','P','F','T'],
      ['S','W','V','Q'],
      ['C','N','D','T','M','L','H','W']
    ]
    // let boxes = 
    // [
    //   ['n', 'n'],
    //   ['m', 'c', 'd'],
    //   ['p'],
    // ]
   
  for (let index = 0; index < dataLog.length; index++) {
    
    let move = dataLog[index].substring(4,dataLog[index].indexOf('from')) 
    let ind = dataLog[index].indexOf('from') ; 
    ind = ind + 5;

    let ind2 = dataLog[index].indexOf('to') ; 
    ind2 = ind2 + 2;
   
    let from = dataLog[index].substring(ind,dataLog[index].indexOf('to'))
    let to = dataLog[index].substring(ind2,dataLog[index].length)

    move = parseInt(move); // quantos numeros de caixas serão movidas de array para outro
    from =   parseInt(from)- 1; // qual posição vai ser retirado essas caixas
    to =  parseInt(to) - 1 ; // qual posição vai ser inserido essas caixas
    
 
 var fixBox = []
    for (let ind2 = 0; ind2 < move; ind2++) { //filtrando quais caixas saem do array boxes[from] 
      
      fixBox[ind2] = boxes[from][ind2]
    }
    
    let moving = move
    fixBox = fixBox.reverse() //invertendo ordem respeitando o padrão de fila 
    
    for (let ind2 = 0; ind2 < boxes[to].length; ind2++, moving++) { //caixas sendo inseridas no array boxes[to]
      
      fixBox[moving] = boxes[to][ind2]
      
    }

    boxes[to] = fixBox
    boxes[from]= boxes[from].slice(move) 

 
  }
  console.log(`
  ${boxes[0][0]}${boxes[1][0]}${boxes[2][0]}${boxes[3][0]}${boxes[4][0]}${boxes[5][0]}${boxes[6][0]}${boxes[7][0]}${boxes[8][0]}
  posição 1:${boxes[0][0]} 
  posição 2:${boxes[1][0]} 
  posição 3:${boxes[2][0]} 
  posição 4:${boxes[3][0]} 
  posição 5:${boxes[4][0]} 
  posição 6:${boxes[5][0]} 
  posição 7:${boxes[6][0]} 
  posição 8:${boxes[7][0]} 
  posição 9:${boxes[8][0]}`)


  })


 
 
  
 })


 