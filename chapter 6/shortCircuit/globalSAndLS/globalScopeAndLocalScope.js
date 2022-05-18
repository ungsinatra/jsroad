/*
let num = 1;
		
function func() {
	console.log((num));
}

console.log(func());  1
*/



 /*
let num = 1;
		
function func() {
	console.log(num);
}

num = 2;
func();  2
 */




/*
function func() {
	console.log(num)
}

let num;

num = 1;
func();//1

num = 2;
func();//2
*/



/*Local scope */

/* 
function func() {
	let num = 5; 
	alert(num);
}

alert(num);//num is not defined

*/


/*

function func() {
	let num = 5;
	return num;
}

console.log((func()));//5

*/



/* 
let num = 1;

function func() {
	num = 2;
}
func();

alert(num);//2
*/


/* 
let num = 1;

function func() {
	let num = 2;
}
func();

alert(num);//1
*/



/*
let num = 1;

function func() {
	num = 2;
}
func();

alert(num);//2

*/


/* 
let num = 1;

function func() {
	num = 2;
}

alert(num);//1

*/



/*
let num = 1;

function func() {
	let num = 2;
}
func();//2

alert(num);//1

*/


/* 
let num = 1;

function func() {
	num++;
}

func();
func();
func();
console.log(num);//4

*/


/* 
function func(localNum) {
	console.log(localNum);
}

func(1);//1
*/


/* 
function func(localNum){
	console.log(localNum)

}

let num = 1;
func(num);//1

num =2;
*/



/* 
let num =1;
function func(localNum){
	console.log(localNum);
}

num = 2;
func(num)//2
*/

/* 
function func(localNum){
	localNum=2;
	console.log(localNum)
}
let num = 1;
func(num);//2
console.log(num)//1
*/



/*
function func(localNum){

	num = 2;
}

let num = 1;
func(num);
console.log(num)//2

*/

/* 

function func(localNum){
	let num = 2
}

let num = 1;
func(num);

console.log(num);//1

*/



/* 
function func(num){
	num  = 2;
	console.log(num)
}	


let num = 1;

func(num);//2
console.log(num)//1

*/

/* 

function func(){
	let num = 2;
}

let num  = 1;
func();

console.log(num)//1

*/


function newFuc(){

	return 'sardor'
}

console.log(newFuc())