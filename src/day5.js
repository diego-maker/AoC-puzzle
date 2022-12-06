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
   
  for (let index = 0; index < dataLog.length; index++) {
    
    let move = dataLog[index].substring(4,dataLog[index].indexOf('from'))
    let ind = dataLog[index].indexOf('from') ;
    ind = ind + 5;

    let ind2 = dataLog[index].indexOf('to') ;
    ind2 = ind2 + 2;
   
    let from = dataLog[index].substring(ind,dataLog[index].indexOf('to'))
    let to = dataLog[index].substring(ind2,dataLog[index].length)

    move = parseInt(move);
    from = parseInt(from);
    to = parseInt(to);
    
    if(from == 9){
      from = 8;
    }
    if(from == 1){
      from == 0
    }

    console.log(boxes[8])
   
  }
   
  })


 
 
  
 })