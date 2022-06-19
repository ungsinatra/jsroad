
function showName (){
	console.log(this.name +' '+this.age);
}

const obj = {
	name:'sardor',
	age:15,
	obj1:{
		name:'lol',
		age:'something',
		show(){
			return `NAME:${this.name} AGE:${this.age}`
		}
	}
}
let showObj = obj.obj1.show.bind(obj);
console.log(showObj())
console.log(obj.obj1.show.call(obj))

//===================================
function getSum(a){
	return a+5
}



function showRes(fc,number){
	if(number>=10){
		let res;
		return res = fc.call(this,number);
	}
	return number+=1; 
}

// console.log(showRes(getSum,10))



//==================================


function slow(x){
	return x
}

function getTime(fc,number){
	let start = Date.now();
	let res = fc(number);
	let stop = Date.now();
	
}




const wolker = {
	method(){
		return 1
	},
	slow(x,y){
		
		return x+y;
	}

}



function hash(args){
	return `${args[0]},${args[1]}`
}

function multy(a,b){
	return a*b;
}
function chachingDecorator(fc,hash){
	let cache  = new Map();
	return function(){
		let key = hash(arguments)
		if(cache.has(key)){
			return cache.get(key);
		}
		let result = fc(...arguments);
		cache.set(key,result);
		return result;
	} 
}

// console.log(chachingDecorator.call(wolker.slow,hash)(5,6))

wolker.slow = chachingDecorator(wolker.slow,hash)
console.log(wolker.slow(5,3))//8
console.log(wolker.slow(5,3))
console.log('again:',wolker.slow(7,30))


//=====================================

let newObj = {

	slow(x,y){
		return x+y;
	}


}

function hashConv(args){
	/*
	const  arr = Array.from(args);
	const str = arr.join('')
	*/
	let str = [].join.call(this)
	
	return str
}

function numberToCach(fn,hashConv){

	let cache = new Map();
	return function(){
		let key = hashConv(arguments);
		if(cache.has(key)){
			return cache.get(key)
		}
		let result = fn.apply(this,arguments)
		cache.set(key,result);
		return result
	}

}

newObj.slow = numberToCach(newObj.slow,hashConv);

console.log(newObj.slow(5,5))

//==========================================
Array.prototype.myMulty = function(n){
	console.log(`THIS:${this}`)
	return this.map(el=>{
		return el*el
	})
}
console.log([1,2,3].myMulty())