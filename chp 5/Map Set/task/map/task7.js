let obj = {
	name:'sardor',
	age:19,
	showAge(){
		console.log(this.age)
	}

}

let arrOfObj = new Map(Object.entries(obj));
console.log(arrOfObj)