import fs from 'fs';

fs.readFile('./src/file/input1.txt','utf8', function(err,data){
	//Enviando para o console o resultado da leitura
	console.log(data);
});

