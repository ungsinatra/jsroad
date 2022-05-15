// Используя метод map преобразуйте этот массив в следующий:
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];


let arr = ['123', '456', '789'];

function convertArr (array){
	array = array.map(el=>{
		const strToArr = el.split('');
		return strToArr;
	})
	return array;
}
console.log(convertArr(arr))