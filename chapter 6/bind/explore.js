let user = {
  firstName: "Вася",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  },
};

const sayHi = user.sayHi.bind(user);
setTimeout(sayHi, 1000);

//===================================
const person = {
  name: "sardor",
  show: function () {
    console.log(this.name);
  },
};

person.show();

//=======================================

let user1 = {
  firstName: "Вася",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  },
};

setTimeout(user1.sayHi.bind(user1), 1000); //bind контекст user1

//================================
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach((student) => {
      // Error: Cannot read property 'title' of undefined
      console.log(this.title + ": " + student);
    });
  },
};

// group.showList = group.showList.bind(group);
console.log(group.showList());

//=====================================

function showInfo(status) {
  console.log(
    `MODEL:${this.model},HP:${this.hp},PRICE:${this.price},STATUS:${status}`
  );
  setTimeout(() => {
    console.log(this.model);
  }, 1000);
}
const car = {
  model: "tesla",

  hp: "ebobo? its electro car",

  price: 10e6,
};

const printInfo = showInfo.bind(car, "this is a peace of shit");
console.log(printInfo());

//=========================================

function mult(a,b){
	return a*b;
}
const printMult = mult.bind(null,1)
//context = null(так как контекст нам тут не нужен,a=1);
console.log(printMult(1))//1


