import fs from 'fs';

fs.readFile('./src/file/day1.txt','utf8', function(err,data){
	//Enviando para o console o resultado da leitura

	let rows = [JSON.stringify(data)]; 
	rows.map(x=>{

	
		var elves = (x.replaceAll('\\r\\n', " "));
		 elves = (elves.replaceAll(' ', ','));
		 elves =  (elves.replaceAll(',,','/'));
		 elves =  (elves.replaceAll('"',''));
		
		 elves = elves.split("/");	
		 let elve= [];

		 for (let index = 0; index < elves.length; index++) {
			elve[index]= elves[index].split(','); 
			elve[index] = 	elve[index].map(y=>{
					if(parseInt(y) != NaN){
				return parseInt(y);

					}
			 })
			 let soma = 0 ;
			 for (let i = 0; i < elve[index].length; i++) {
				soma += elve[index][i];
			 }

			 elve[index] = soma;
		 }
		
		 let max = elve.reduce(function(a, b) {
			return Math.max(a, b);
		}, -Infinity);

		 console.log(max);
		 
	});

});

