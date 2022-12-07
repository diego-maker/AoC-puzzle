import fs from 'fs';

fs.readFile('./src/file/day6.txt','utf8', function(err,data){
	//Enviando para o console o resultado da leitura

	let rows = [JSON.stringify(data)]; 
	rows.map(x=>{
 
    let source = x.replaceAll('"',"")
    console.log(source.length) //posição retornada
    let init = 4 ;

    for (let index = 0; index < source.length; index++,init++) {
      
      let pocket =source.substring(index, init); 
      
      if(pocket.length == 4){  

          let letter1 = pocket.substring(0,1)
          let letter2 = pocket.substring(1,2)
          let letter3= pocket.substring(2,3)
          let letter4 = pocket.substring(3,4)
       
          if(letter1 != letter2 && letter1 != letter3 && letter1 != letter4 && letter2 != letter1 && letter2 != letter3 && letter2 != letter4 && letter3 != letter1 && letter3 != letter2 && letter3 != letter4 && letter4 != letter1 && letter4 != letter2 && letter4 != letter3 ){
            console.log(pocket)
          }
        
        }
    }
  })
})