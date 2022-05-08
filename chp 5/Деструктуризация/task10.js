function func(employee) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	let position   = employee[3];
	let salary     = employee[4];
}
function adc(employee){
	let [name,surname,department,position ='junior'] = employee; 
	console.log(name)
	console.log(surname)
	console.log(position)
}

adc( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );