let newSet = new Set();

let sardor = {name:'sardor'};
let Elena = {name:'Elena'};
let coll = {name:'Col'};


newSet.add(sardor)
newSet.add(Elena)
newSet.add(coll)
newSet.add(sardor)
newSet.add(sardor)

newSet.forEach(el=>{
	console.log(el)
})


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// keys.push("more");

console.log(keys)