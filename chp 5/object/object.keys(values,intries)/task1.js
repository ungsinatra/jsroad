let obj ={
	name:1,
	age:18
}


let newObj = Object.fromEntries(Object.entries(obj).map(([key,value]) =>[key,value*2] ))
console.log(newObj)