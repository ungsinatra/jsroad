// Вручную преобразуйте этот массив в строку в формате JSON.


let obj = {
	a: 1,
	b: 2,
	c: 'eee',
	d: true,
};


let newJson = `{
	"a":1,
	"b":2,
	"c":"eee",
	"d":true
}`

console.log(JSON.parse(newJson))