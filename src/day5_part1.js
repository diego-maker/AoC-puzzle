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
    //   ['z', 'n'],
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

    move = parseInt(move);
    from =   parseInt(from)- 1;
    to =  parseInt(to) - 1 ;
    
 
 var fixBox = []
    for (let ind2 = 0; ind2 < move; ind2++) {
      
      fixBox[ind2] = boxes[from][ind2]
    }
    
    let moving = move

    fixBox = fixBox.reverse()
    
    for (let ind2 = 0; ind2 < boxes[to].length; ind2++, moving++) {
      
      fixBox[moving] = boxes[to][ind2]
      
    }

    boxes[to] = fixBox
    boxes[from]= boxes[from].slice(move) 

 
  }
  console.log(boxes[0][0])
  console.log(boxes[1][0])
  console.log(boxes[2][0])
  console.log(boxes[3][0])
  console.log(boxes[4][0])
  console.log(boxes[5][0])
  console.log(boxes[6][0])
  console.log(boxes[7][0])
  console.log(boxes[8][0])


  })


 
 
  
 })


 