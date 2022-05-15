/ForEach/ ;



// const tesla  = [1,2,3,4,5,6,7];
// const newArr = [];
// let obj = {}
// tesla.forEach(function(element,id)  {
// 	 newArr.push(element**2)
// });

// console.log(newArr);



/map/ ;

// let arr = [1,2,3,4,5];
// const newArr = []
// arr.forEach(element => {
// 	if(element%2==0){
// 		newArr.push(element)
// 	}
// });
// console.log(newArr)

// function learnJavaScript() {
// 	const friends = [
// 	  { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
// 	  { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
// 	  { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
// 	  { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
// 	  { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
// 	  { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
// 	]
// 	const obj = {
// 		rank:'2'
// 	}
// 	const friendsPassport = friends.map(function(el,id){
// 		return +(el.age)+(+this.rank);

// 	},obj)
// 	return friendsPassport
// }
// console.log(learnJavaScript());

/filter/;

// const arr = [112,2,3,4,5,12,343,41231,12312,3434];
// const newArr = arr.filter((el)=>{
// 	return el%2==0;

// })
// console.log(newArr)

// const goods = [
// 	{
// 	  name: "AirPods",
// 	  description: "Классные беспроводные наушники",
// 	  prive:999
// 	},
// 	{
// 	  name: "MacBook Pro",
// 	  description: "Ноутбук на все случаи жизни",
// 	  price:1200
// 	},
// 	{
// 	  name: "iPhone",
// 	  description: "",
// 	  price:1200,
// 	},
// 	{
// 	  name: "Дошик",
	  
// 	},
//   ]


// const newArr = goods.filter((el,id)=>{
// 	return el.price>999;

// })
// console.log(newArr)


// const arr = [1,2,3,4,5,6,7,0,-2,-3];
// const newArr = arr.filter(el=>{
// 	if(el=>0){
// 		return  true
// 	}

// })

// console.log(newArr)




/conact/;


// const arr =[21,22,23,24];
// const arr1 = [25,26,27,28];
// const arr3 = [42,54,546,65]
// let result  = arr.concat(arr1,arr3)
// console.log(result);



/splice/;

// let arr =['sardor','elena','mish','bob','spanch'];

// const newArr = arr.splice(2,1,'Volkov','Bobov','Smirnov');
// console.log(arr)

// console.log(newArr)


// const newArr = [1,2,3,4,5];
// const arr = newArr.splice(0,0,5,4,3,2,1)
// console.log(arr);
// console.log(newArr);


/find and findindex/

// const  arr = [{name:'Elena',Age:22},{name:'Sardor',age:19},{name:'Rayana',age:1}];

// const newArr = arr.find(el=>{
// 	return el.name==='Elena';

// })

// console.log(newArr)



// let toDoToday = [
// 	'Do js',
// 	'cook',
// 	'clean up flat',
// 	'do weather app',
// ]

// function getToDo (el,id,arr){
// 	let toDoFirst ='clean up flat'
// 	return el ===toDoFirst;

// }

// let get = toDoToday.find(getToDo).toLocaleUpperCase();
// let getIndx = toDoToday.findIndex(getToDo);

// console.log(getIndx);



// /includes/;


// let newArr = ['Sardor','Elena'];

// let getName = newArr.includes('Sardor');

// console.log(getName)


// /reduce/

// const users = [
// 	{ id: "1", name: "John" },
// 	{ id: "2", name: "Anna" },
// 	{ id: "3", name: "Kate" },
//   ]
  
//   const usernamesById = users.reduce(function (result, user) {
// 	return {
// 	...result,
// 	  [user.id]: user.name,
// 	}
//   }, [])
//  console.log(usernamesById);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function filterEvens(num) {
//   return num % 2 === 0
// }

// function square(num) {
//   return num * num
// }

// function filterGreaterThanFifty(num) {
//   return num > 50
// }


// const newArr = numbers.reduce((acc,num)=>{
// 	if(filterEvens(num)){
// 		const squared = square(num)
// 		if(filterGreaterThanFifty(squared)){

// 			acc.push(squared);
// 		}

// 	}
// 	return acc
// },[])
// console.log(newArr)

// const result = numbers
//   .filter(filterEven)
//   .map(square)
//   .filter(filterGreaterThanFifty)

// console.log(result)



// /some/
 let array=[1,2,3,4]

function getName (arr){
	let newArr =arr.some(el=>{
		if(el<10){
			return el
		}

	})
	return newArr
}
console.log(getName(array))