let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};

let json = JSON.stringify(student,((key,value)=>{
	if(typeof value =='number'){
		value=value*2
	}
	return key,value
}),2)

console.log(json)