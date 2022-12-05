import fs from 'fs';

var FINALSUM = 0;
fs.readFile('./src/file/day3/day3.txt','utf8', function(err,data){
	//Enviando para o console o resultado da leitura

	let rows = [JSON.stringify(data)]; 
	rows.map(x=>{
		console.log(x);
		 
	});

});

