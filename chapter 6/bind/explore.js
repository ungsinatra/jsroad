let user = {
	firstName: "Вася",
	sayHi() {
	  console.log(`Привет, ${this.firstName}!`);
	}
  };
  
const sayHi = user.sayHi.bind(user)
  setTimeout(sayHi, 1000) 


//===================================
const person = {
	name:'sardor',
	show:function(){
		console.log(this.name)
	}

}

person.show()


//=======================================


let group = {
	title: "Our Group",
	students: ["John", "Pete", "Alice"],
  
	showList() {
	  this.students.forEach((student) =>{
		// Error: Cannot read property 'title' of undefined
		console.log(this.title + ': ' + student)
	  });
	}
  };
  
// group.showList = group.showList.bind(group);
console.log(group.showList())
