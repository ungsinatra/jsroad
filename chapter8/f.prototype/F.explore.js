let animal = {
    eats:true,

}

function Rabbit(name){
    this.name = name;
}

Rabbit.prototype = animal;
let rabbit = new Rabbit('black rabbit');

console.log(rabbit.__proto__);
console.log(Rabbit.prototype.constructor == Rabbit)
console.log(rabbit.__proto__ == animal)

//===========================


function Car(name){
    this.name = name;    
}


let tesla = new Car('tesla');


console.log(Car.prototype)