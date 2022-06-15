
function getVar(){
	console.log(getVar);
	//undefined
	var getVar;
	getVar = 'я VAR'
	console.log(getVar)// 'я var'
}
getVar()



function getVar(){
	
	getVar = 'я VAR'
	console.log(getVar);//'я var'
	var getVar;

}
getVar()




if(true){
	var num = 15
}

console.log(num)//15



var number = 15;
console.log(number)//15
var number = 20;
console.log(number)//20



let speed  = 15;
var straph = false
 
 if (speed >10){
	 straph = true
 }
 console.log(straph)//true

 


function sayhi() {
  phrase = "Hi";

  console.log(phrase);//hi

  var phrase;
  function getNm() {
    phrase = 14;
  }
  getNm();
  console.log(phrase);//14
}

sayhi();


'use strict'
function sayhi() {
	

	 function newVar(){
		var num = 14
	}
	newVar()
	num = 14
	console.log(num)//14
	var num

  }
  
  sayhi();



console.log(num)



var show1 = 'show'
function show(){
	show1 = 'non'
	

}

show()
console.log(show1)//'non'

'use strict'

function nonVar(){
	secondName = 'hitler';
	console.log(secondName)
}
nonVar()
console.log(secondName)//hitler

console.log(gavno)//undefined

var gavno  = 'gavno';
console.log(gavno)//govno
var gavno = 'negovno'

console.log(gavno)//negovno


