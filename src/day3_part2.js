import fs from 'fs';

fs.readFile('./src/file/day3.txt','utf8', function(err,data){

	var initMap = [0,1,2]; // utilizando fila para mapear por 3 
	var execute = true;
	var count = 0;
	var agroup = [];
	var FINALSUM = 0;

	let rows = [JSON.stringify(data)]; 
	rows.map(x=>{

		var elves = (x.replaceAll('\\r\\n', "/"));
		elves = elves.split("/");
		
		let group3 = elves.length / 3; 
		
		for (let index = 0; index < group3; index++) {		

		 agroup[index] = index;
		 agroup[index ] = [0,1,2];
		}
		
		while(execute == true){

			for (let index = 0; index < initMap.length; index++) {
				
				if(elves[initMap[index]] == undefined || elves[initMap[index]] == null){
					execute = false;
					break;
				}
				else{
					
					elves[initMap[index]] = (elves[initMap[index]].replaceAll('"', ""));
				agroup[count][index]= elves[initMap[index]];
			
				var last = initMap[initMap.length - 1];
				
				}
			}
			
			count = count + 1;
				initMap[0] = last + 1;
				initMap[1] = initMap[0] + 1;
				initMap[2] = initMap[1] + 1;
		}	 

	let newAgroup =	getLetter(agroup); // letra duplicada nas tres linhas vai retornar na posição [0] de cada indice de array
	
	for (let ind = 0; ind < newAgroup.length; ind++) {
		
		
		let numberPriority = getPriority(newAgroup[ind][0])
		FINALSUM +=  numberPriority;

		
	}
	console.log(FINALSUM)
});

});


function getLetter(agroup){

	

	for (let index = 0; index < agroup.length; index++) {
		
		
		for (let ind3 = 1; ind3 < agroup[index].length; ind3++) {
			
			let count = 1 ;
			for (let index2 = 0; index2 < agroup[index][0].length; index2++, count++) {
				
				let searchLetter = agroup[index][0].substring(index2,count)

				let bag1 = agroup[index][ind3].indexOf(searchLetter);
				let ind4 = ind3 + 1 ;
				if(agroup[index][ind4] != undefined){
					var bag2 = agroup[index][ind4].indexOf(searchLetter);

				}
				
				if(bag1 != -1 && bag2 != -1){
					
					agroup[index][0] = searchLetter
		

				}
				
			}

		}
	
	}


	return agroup
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