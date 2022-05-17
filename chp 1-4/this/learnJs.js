
function read(){
	this.a  = +prompt('a?',0);
	
	this.b  = +prompt('b?',0);
	console.log(this.a);
	console.log(this.b);
}
function sum(){
	 return this.a+this.b
}
function mul(){
	return this.a*this.b
}

let calculator  = {
	readThis:read,
	sumThis:sum,
	mulThis:mul
}


calculator.readThis();
alert(calculator.sumThis());
alert(calculator.mulThis());