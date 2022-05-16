
'use strict'

// function getWindow(){
// 	console.log(this)

// }
// getWindow()//undefined use strict

// function getThis(){
// 	console.log(this.name)

// }



// const obj = {
// 	sayHello:getThis,
// 	name:'sardor'

// }
// console.log(obj.sayHello())


// function getName(){
// 	console.log(this) 

// }

// let newObj = {
// 	name:'Sardor',
// 	age:19

// }


// newObj.getMyName = getName;




// getName()
// newObj.getMyName()


// const arrow = ()=>{
// 	console.log(this.newObj.name);

// }

// const newObj = {
// 	newObj:{
// 		name:"Sardor"
// 	},
// 	Love:{
// 		name:'Elena'
// 	},

// 	getName(){
// 		console.log(this.newObj.name);
// 		console.log(this.Love.name);
// 	},
// 	getArrow:()=>{
// 		console.log(this.newObj.name);
	
// 	}
// }
// newObj.getArrow()
// newObj.getName()
// const newObj  ={

// 	model:"Bmw",
// 	price:'1ml',
// 	hp:'450hp',
// 	getPrice(){
// 		 console.log(this.price)

// 	}
// }




// const getcharac=()=>{
// 	let model  = this.model;
// 	let price =this.price;
// 	let housePawer = this.hp
// 	return console.log(`model:${model},Price:${price},HoursePower:${housePawer}`)
// }


// newObj.getInfo = getcharac;
// newObj.getInfo();
// newObj.getPrice()


// function getInput(){
// 	let getI = this.value
// 	console.log(this.value)
// 	let self = this
// 	function getSecond(){
// 		console.log(self.value)
// 	}
// 	getSecond();

// }

// let newElemet = document.querySelector('.input');

// newElemet.addEventListener('mouseover',getInput)



// function Burger(){
// 	this.name;
// 	this.love;
// 	this.getFullName=function(){
// 		console.log(this.name);
// 	}

// }

// const newObj = new Burger();


// newObj.name = 'Sardor';
// newObj.love = 'Elena';
// newObj.getFullName();
// console.log(newObj)
// newObj.getFullName()
// // newObj.getName()


const arrow = ()=>{
	console.log(this.age)

}

function fcGetAge(){
	console.log(this.age)
	function newArrowFc(that){
		console.log(that.person)
	}
	newArrowFc(this);
}

let newboj = {
	age:12,
	person:'men',
	getAge:arrow
}

newboj.getAge()//undefined так как будет без use strict window.name()- такого нету да и без use strict тоже не было б 

newboj.getALLobj = fcGetAge;
newboj.getALLobj();
