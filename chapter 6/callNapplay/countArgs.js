function mult(first,second){
	
	return first+second

}



function checkArgs(fn){

	return function(...args){
		if(args.length<fn.length){
			throw new Error('ERROR:arguments uncorrect')
		}
		const newArg = args.filter(el=>Number.isFinite(el))
		if(newArg.length<fn.length){
			throw new Error('ERROR:arguments uncorrect')
		}
		return fn.apply(this,newArg)
	}

}


const showRes = checkArgs(mult);
console.log(showRes(5,5))