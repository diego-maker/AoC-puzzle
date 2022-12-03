import fs from 'fs';

fs.readFile('./src/file/day2_part1.txt','utf8', function(err,data){
	//Enviando para o console o resultado da leitura

	let rows = [JSON.stringify(data)]; 
	rows.map(x=>{

		var elves = (x.replaceAll('"', ""));
		 elves = (x.replaceAll('\\r\\n', "/"));
		elves = elves.split("/");	
		var elve = [];
		for (let index = 0; index < elves.length; index++) {
			 elve[index] = elves[index].replaceAll('"', "");
			 elve[index] = elve[index].replaceAll(" ", ",");
			 elve[index] = elve[index].split(",");
			
		}
		var points = 0;
		for (let index = 0; index < elve.length; index++) {
			
			if(elve[index][0] == 'A' && elve[index][1] == 'X'){
				points = points + 3;
			}
			else if(elve[index][0] == 'A' && elve[index][1] == 'Y'){
				points = points + 4;
			}
			else if(elve[index][0] == 'A' && elve[index][1] == 'Z'){
				points = points + 8;
			}
			else if(elve[index][0] == 'B' && elve[index][1] == 'X'){
				points = points + 1;
			}
			else if(elve[index][0] == 'B' && elve[index][1] == 'Y'){
				points = points + 5;
			}
			else if(elve[index][0] == 'B' && elve[index][1] == 'Z'){
				points = points + 9;
			}
			else if(elve[index][0] == 'C' && elve[index][1] == 'X'){
				points = points + 2;
			}
			else if(elve[index][0] == 'C' && elve[index][1] == 'Y'){
				points = points + 6;
			}
			else if(elve[index][0] == 'C' && elve[index][1] == 'Z'){
				points = points + 7;
			}
			
			
			
		}
		console.log(points) //total de pontos
	});

});

