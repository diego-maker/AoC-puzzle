import fs from 'fs';

fs.readFile('./src/file/day7.txt','utf8', function(err,data){
	//Enviando para o console o resultado da leitura

	let rows = [JSON.stringify(data)]; 
	rows.map(x=>{

		let commands = x.replaceAll("\\r\\n", ',');
		 commands = commands.replaceAll('"', '');

		commands = commands.split(',');
		class Node {
			name = "";
			parent = null;
	
			isDirectory = true;
			size = 0;
			children = {};
			
	
			Node() {
			}
	}
	
	function processandoComando(command, rootNode, currentPosition) {
			let newCurrentPosition = currentPosition;
	
			const splitCommand = command.split(" ");
			if (splitCommand[1] == "cd") {
					if (splitCommand[2] == "..") {
							newCurrentPosition = currentPosition.parent;
					} else if (splitCommand[2] == "/") {
							newCurrentPosition = rootNode;
					} else {
							if (currentPosition.children[splitCommand[2]]) {
									newCurrentPosition = currentPosition.children[splitCommand[2]];
							}
					}
			} else if (splitCommand[1] == "ls") {
			} 
	
			return newCurrentPosition;
	}
	
	function processandoArquivo(command, currentPosition) {
			const splitCommand = command.split(" ");
			if (!currentPosition.children[splitCommand[1]]) {
					const newNode = new Node();
					newNode.name = splitCommand[1];
					newNode.parent = currentPosition;
					currentPosition.children[splitCommand[1]] = newNode;
	
					if (splitCommand[0] === "dir") {
							newNode.isDirectory = true;
					} else {
							newNode.isDirectory = false;
							newNode.size = +splitCommand[0];
					}
			}
	}
	
	function atualizandoTamnho(node) {
			if (!node.isDirectory) {
					return node.size;
			}
	
			let subSize = 0;
			for (let child of Object.values(node.children)) {
					subSize += atualizandoTamnho(child);
			}
			node.size = subSize;
			return subSize;
	}
	
	function somandoDiretorioMenor(node, threshold, totalSize) {
			if (!node.isDirectory) {
					return totalSize;
			}
	
			for (let child of Object.values(node.children)) {
					totalSize = somandoDiretorioMenor(child, threshold, totalSize);
			}
	
			if (node.size <= threshold) {
					return node.size + totalSize;
			}
	
			return totalSize;
	}
	
	function encontrandoMaiorDiretorio(node, candidateNode, targetSize) {
			if (!node.isDirectory) {
					return candidateNode;
			}
	
			for (let child of Object.values(node.children)) {
					candidateNode = encontrandoMaiorDiretorio(child, candidateNode, targetSize);
			}
	
			if (node.size < targetSize) {
					return candidateNode;
			}
	
			if (!candidateNode || node.size <= candidateNode.size) {
					return node;
			}
	
			return candidateNode;
	}
	
	function solve(part) {
			const rootNode = new Node();
			rootNode.name = "/";
			rootNode.isDirectory = true;
	
			let currentPosition = rootNode;
	
			for (let command of commands) {
					if (command.charAt(0) == "$") {
							currentPosition = processandoComando(command, rootNode, currentPosition);
					} else {
							processandoArquivo(command, currentPosition)
					}
			}
			const totalSize = atualizandoTamnho(rootNode);
	
			if (part === "part1") {
					console.log(somandoDiretorioMenor(rootNode, 100000, 0));
			} else {
					const totalSpace = 70000000;
					const freeSpaceNeeded = 30000000;
					const currentlyFreeSpace = totalSpace - totalSize;
					const moreSpaceNeeded = freeSpaceNeeded - currentlyFreeSpace;
					console.log(encontrandoMaiorDiretorio(rootNode, null, moreSpaceNeeded).size);
			}
	}
	

	solve("part1");

	solve("part2");
	})
})