function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}
// !Переделайте этот код через деструктуризацию согласно изученной теории


let[name,surname,department,position,salary] = func()
console.log(salary)