// Давайте напишем функцию getInt, которая будет находить пересечение любого количества массивов.

// Пример работы такой функции:

// let result = getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]);
// console.log(result); // выведет [2, 3]


function findInArrays(el,arrs){
	for(let char of arrs){
		if(!getIndex(char,el)){
			return false
		}else{
			return true
		}

	}


}

function getIndex(arr,el){
	return arr.indexOf(el)!==-1 
	
}



function getInt(...args){
	let res = [];
	let arrZeroEl = args.shift();
	for(let char of arrZeroEl){
		if(findInArrays(char,args)){
			res.push(char)

		}

	}
	return res


}


console.log(getInt([1, 2, 3], [2, 3, 4], [4, 3, 2]))