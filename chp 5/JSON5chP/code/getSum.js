// Найдите сумму чисел из представленных данных. 
let json = `{
	"data1": [1,2,3],
	"data2": [4,5,6],
	"data3": [7,8,9]
}`;

let obj = JSON.parse(json);

let count = 0;
let arrValue = Object.values(obj).flat(Infinity).map(el=>{
	count+=el
})


console.log(count)//45