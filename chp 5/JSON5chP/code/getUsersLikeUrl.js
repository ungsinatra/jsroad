// Выведите эти имена в виде списка ul. 
let json = '["user1","user2","user3","user4","user5"]';


const arr = JSON.parse(json).forEach(element => {
	console.log(`ul{${element}}`)
});