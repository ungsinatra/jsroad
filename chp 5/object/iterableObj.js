const person =  {
	from :0,
	to:5,
	

}











person[Symbol.iterator] = function(){

	return {
		current:this.from,
		last:this.to,
		next(){

			if(this.current<=this.last){
				return {done:false,value:this.current++}
			}else{

				return{done:true}
			}

		}
	}


}

for(let i of person){

	console.log(i)
}

const id =  {
	0 :'Alex',
	1:18,
	length:2
}


let getArr = Array.from(id);
console.log(getArr)