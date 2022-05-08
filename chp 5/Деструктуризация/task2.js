//? Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
  };
function topSalary(salaries) {
let max = 0;
let maxName = null;
for(let [name,salary] of Object.entries(salaries)){
	if(max<salary){
		max = salary;
		maxName = name;
		
	}
}
return maxName
}
console.log(topSalary(salaries));