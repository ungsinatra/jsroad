// Дана строка в формате JSON, содержащая массив с данными работников:
// Выведите этих работников на экран в виде  таблицы
let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;


let _arr = JSON.parse(json).forEach(element => {
	console.table(element)
});