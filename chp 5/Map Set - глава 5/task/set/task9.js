let par = document.querySelectorAll('p');
let bnt = document.querySelector('button');
const set = new Set();

for(let el of par){
	el.addEventListener('click',function(){
		set.add(el)
		console.log(set)
	})
}



bnt.addEventListener('click',function(){
	for(let value of set){
		value.textContent = value.textContent+'!';

	}

})