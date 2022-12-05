import fs from 'fs';

var FINALSUM = 0;
fs.readFile('./src/file/day3.txt','utf8', function(err,data){
	//Enviando para o console o resultado da leitura

	let rows = [JSON.stringify(data)]; 
	rows.map(x=>{

	
		var elves = (x.replaceAll('\\r\\n', "/"));
		elves = elves.split("/");
	
		for (let index = 0; index < elves.length; index++) {
			let elve = elves[index];
			 elve = elve.replaceAll('"', "");


			let number = elve.length / 2 ; 
			let col2 = elve.substring(number)
			let col1 = elve.substring(0,number)
	
			let count = 1;
			for (let index2 = 0; index2 < col1.length; index2++, count++) {
			
				let letter1 = col1.substring(index2, count)
				
			let count2 = 1;
		
				let finalLetter = getLetter(count2, col2, letter1);
				
				if(finalLetter != undefined){
					
				 let numberPriority	= getPriority(finalLetter);
				
					FINALSUM +=  numberPriority;
					
					break;

				}
			}
			
		}
		console.log(FINALSUM);
		 
	});

});


function getLetter(count2, col2, letter1){
	for (let index2 = 0; index2 < col2.length; index2++, count2++) {
					
		let letter2 = col2.substring(index2, count2)

		if(letter2 == letter1){
			return letter1
		}	
		}
}



function getPriority(letter){

 let order = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let count2 = 1 ;
 for (let index = 0; index < order.length; index++, count2++) {
	let letterOrder = order.substring(index, count2)
	
	if(letter === letterOrder){
		return count2;
	}
 }
}