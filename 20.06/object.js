// const arr = [1,3,4,5];
// let obj = {}
// const newArr = []
// obj[arr] = 40;
// obj[newArr] = 40
// // console.log(obj)//{'1,2,3,5':40,'':40}


//  можно ли использовать object.key().value() в массивах 
let key = Object.keys(arr).map(el=>{
	return el
})
console.log(key)//[0,1,2,3]


let value  = Object.values(arr).map(el=>{
	return el
})
console.log(value)//[1,2,3,5]


const newObj = {};
newObj = {}
console.log(newObj)



// instanceOF - прочитать про instanseof


function User() {
	this.name;
	this.age;
}

const firstChel = new User();

firstChel.name = "Sardor";
firstChel.age = 25;


console.log(firstChel instanceof User)//true так как она наслд от User


console.log([1,2,4] instanceof Object)//true так как arr наслд отobject



function getStingCount(obj) {
	let count = 0;
  
	  if (obj instanceof Object) {
		  for (let value of Object.values(obj)) {
			if (typeof value === "string") {
			  count += 1;
			}else{
	  
				count += getStingCount(value);
			}
		  }
		}
		
	return count;
}
console.log(getStingCount(['1','2']))//2  



//можно ли использовать деструктуризацию  в обьекте как массив?


let obj = {
	name:'asdasd',
	age:14,
	to:30,
	[Symbol.iterator](){
		
		return {
		corrent:this.age,
		last:this.to,
		 next(){
			if(this.corrent<=this.last){
				return{done:false,value:this.corrent++}
			}else{
				return{done:true}

			}

		}
		}
	}
}


let newArr = [1,2,3,4];

let {first,second,...all} = newArr
let [...rest] = obj
console.log(all)//
console.log(rest)








function getSum(a,b){
	return a+b
	+30-
	'-;0                            bv'
}

console.log(getSum(5,6))