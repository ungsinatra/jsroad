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
