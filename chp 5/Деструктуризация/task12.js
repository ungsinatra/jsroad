
	// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
  };

  function topSalary(salaries){
	  let maxNum = 0;
	  let nameM ;
	for(let [name,salary] of Object.entries(salaries)){

		if(maxNum<salary){
			maxNum=salary
			nameM = name
		}
		
	}
	return nameM;

  }

  console.log(topSalary(salaries))