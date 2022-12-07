import fs from 'fs';

fs.readFile('./src/file/day6.txt','utf8', function(err,data){
	//Enviando para o console o resultado da leitura

	let rows = [JSON.stringify(data)]; 
	rows.map(x=>{
 
    let source = x.replaceAll('"',"")
    console.log(source.length) //posição retornada
    let init = 14 ;

    for (let index = 0; index < source.length; index++,init++) {
      
      let pocket =source.substring(index, init); 
      
      if(pocket.length == 14){  

          let letter1 = pocket.substring(0,1)
          let letter2 = pocket.substring(1,2)
          let letter3= pocket.substring(2,3)
          let letter4 = pocket.substring(3,4)
          let letter5 = pocket.substring(4,5)
          let letter6= pocket.substring(5,6)
          let letter7 = pocket.substring(6,7)
          let letter8 = pocket.substring(7,8)
          let letter9= pocket.substring(8,9)
          let letter10 = pocket.substring(9,10)
          let letter11 = pocket.substring(10,11)
          let letter12= pocket.substring(11,12)
          let letter13 = pocket.substring(12,13)
          let letter14 = pocket.substring(13,14)
       
          if(letter1 != letter2 && letter1 != letter3 && letter1 != letter4 && letter1 != letter5 && letter1 != letter6 && letter1 != letter7 && letter1 != letter8 && letter1 != letter9 && letter1 != letter10 && letter1 != letter11 && letter1 != letter12 && letter1 != letter13 && letter1 != letter14
            && letter2 != letter1 && letter2 != letter3 && letter2 != letter4 && letter2 != letter5 && letter2 != letter6 && letter2 != letter7 && letter2 != letter8 && letter2 != letter9 && letter2 != letter10 && letter2 != letter11 && letter2 != letter12 && letter2 != letter13 && letter2 != letter14
            && letter3 != letter1 && letter3 != letter2 && letter3 != letter4 && letter3 != letter5 && letter3 != letter6 && letter3 != letter7 && letter3 != letter8 && letter3 != letter9 && letter3 != letter10 && letter3 != letter11 && letter3 != letter12 && letter3 != letter13 && letter3 != letter14
            && letter3 != letter1 && letter3 != letter2 && letter3 != letter4 && letter3 != letter5 && letter3 != letter6 && letter3 != letter7 && letter3 != letter8 && letter3 != letter9 && letter3 != letter10 && letter3 != letter11 && letter3 != letter12 && letter3 != letter13 && letter3 != letter14
            ){
            console.log(pocket)
          }
        
        }
    }
  })
})