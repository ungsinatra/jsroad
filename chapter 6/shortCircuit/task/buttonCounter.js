
// Даны кнопки. Привяжите к каждой кнопке событие по клику, которое будет считать количество нажатий по кнопке и выводить его в текст кнопки. Количество нажатий для каждой кнопки должно хранится в замыкании.


let btns = document.getElementsByTagName('button');


function getCount(){
	let count  = 0

	return function(){
		 count++
		 this.textContent = count
		 console.log(count)
		
	}


}
btns = Array.from(btns);
let arrBtn = btns.forEach(element => {
	
	return element.addEventListener('click',getCount())
	
});
