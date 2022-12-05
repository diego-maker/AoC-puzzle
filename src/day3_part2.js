import fs from 'fs';

fs.readFile('./src/file/day3.txt','utf8', function(err,data){

	var initMap = [0,1,2]; // utilizando fila para mapear por 3 
	var execute = true;
	var count = 0;
	var agroup = [];
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

		getLetter(agroup);
	});

});


function getLetter(agroup){

	

	for (let index = 0; index < agroup.length; index++) {
		let backs= agroup[index].length

		for (let ind = 0; ind < backs; ind++) {

		
			console.log(`${col1}- ${col2}`);
			
		}
		
	}
}