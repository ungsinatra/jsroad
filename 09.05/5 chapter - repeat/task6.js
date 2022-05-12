// !Reverse. Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

const reverse = (array) => {
		array.sort((a,b)=>{
			return b-a

		})	
		return array

   }
   
   const data = [1, 2, 3];
   console.log(reverse(data)); // [3, 2, 1]