import fs from 'fs';

fs.readFile('./src/file/day6.txt','utf8', function(err,data){
	//Enviando para o console o resultado da leitura

	let rows = [JSON.stringify(data)]; 
	rows.map(x=>{
    
    console.log(x);

  })
})