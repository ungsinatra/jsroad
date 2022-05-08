let user = {
	name: "John",
	years: 30,
	job:'Frontened dev',
	garid:'junior'
};

// !деструктуризация обьекта
let {name,years,isAdmin=false,...rest} = user;
console.log(rest)


