//! Intersection. Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов. Используйте примитивные типы данных.
const intersection = (...arrays) => {
	let newArr = []
		arrays.reduce((acc,item)=>{
			if(acc==item){
				newArr.push(item)
			}
		})
		return newArr
   }
   
   const arr1 = [1, 2];
   const arr2 = [2, 3];
   const arr3 = ['a', 'b'];
   const arr4 = ['b', 'c'];
   const arr5 = ['b', 'e', 'c'];
   const arr6 = ['b', 'b', 'e'];
   const arr7 = ['b', 'c', 'e'];
   const arr8 = ['b', 'e', 'c'];
   console.log(intersection(arr1, arr2)) // [2]
   console.log(intersection(arr3, arr4, arr5)) // ['b']
   console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']