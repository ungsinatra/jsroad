let paragraph  = document.querySelectorAll('p');

let map  = new Map();

let i =0;
for(let el of paragraph){
	map.set(el,i++)

}
for (let elem of paragraph) {
	elem.addEventListener('click', function() {
		this.textContent = this.textContent + map.get(this);
	});
}