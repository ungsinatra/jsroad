/*
    Задача:
    напиши функцию, которая принимает 1 параметр.
    при первом вызове, она его запоминает, при втором,- - суммирует переданый параметр с тем, что передали первый раз и тд
    и всё это с замыканиями
    например
    sum(3) = 3
    sum(5) = 8
    sum(228) = 236

*/



function getSum(){

	let currentN =0;
	return (num)=>currentN+=num

}
let currentFc = getSum();

console.log(currentFc(5))
console.log(currentFc(3))
console.log(currentFc(6))