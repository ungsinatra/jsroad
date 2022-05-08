let student = {
	name: "John",
	age: 30,
	isAdmin: false,
	courses: ["html", "css", "js"],
	wife: null,
  };

let studentJson = JSON.stringify(student,null,2);
let el = {};
let jsonstudent=JSON.parse(studentJson,((key,value)=>{
	if(value===false){
		 value = true
		el[key] = value
		
	}
	return el
}))

console.log(el)