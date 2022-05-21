function makePassward(password){

	return function(pass){
		return (pass===password)

	}
}

const getPass = makePassward(1233);

console.log(getPass(123))




