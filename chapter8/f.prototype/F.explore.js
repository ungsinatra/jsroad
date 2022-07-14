let animal = {
    eats:true,

}

function Rabbit(name){
    this.name = name;
}

Rabbit.prototype = animal;
let rabbit = new Rabbit('black rabbit');

console.log(Rabbit.prototype.constructor == Rabbit)
console.log(rabbit.__proto__ == animal)//true

//===========================


function Car(name){
    this.name = name;    
}

console.log(Car.__proto__ == Function.prototype)//true
let tesla = new Car('tesla');
console.log(tesla.__proto__ == Car.prototype)//true

console.log( Car.prototype.constructor==Car)//true


//==========================================


let BMW = new Car('BMW M2');
let FERRARI = new BMW.constructor('FERRARI F40)');

console.log(BMW.__proto__ == Car.prototype)//true
console.log(FERRARI.__proto__ == Car.prototype)//true




//============


Car.prototype.drive = function(){
    console.log('driving...')
}


BMW.drive()
tesla.drive()
FERRARI.drive()



//===================