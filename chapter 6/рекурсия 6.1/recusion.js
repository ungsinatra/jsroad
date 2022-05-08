// ----------------------------------
// console.log(fac(2,3))
// function getFac(n){
// 	if(n==0){
// 		return 1
// 	}else{
// 		return n*getFac(n-1)
// 	}
// }
// console.log(getFac(3))

// -----------------------------
//  function getQuan(x,n){
// 	if(n==1){
// 		return x
// 	}
// 	return x*getQuan(x,n-1);

// }

// console.log(getQuan(5,2))

// --------------------------------------
let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
		console.log(subdep);
		sum += sumSalaries(subdep);
		console.log(sum);
    }
    return sum;
  }
}

console.log(sumSalaries(company));
