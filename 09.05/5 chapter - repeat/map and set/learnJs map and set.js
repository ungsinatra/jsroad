// let map = new Map();
// map.set(1,'one')
// .set(2,'two')
// .set(3,{
// 	a:'1'
// })

let newObj = {
  1: "1",
  2: "2",
};

let arr = [
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
];
let newArr = Object.fromEntries(arr);
console.log(newArr);
let newMap2 = new Map(Object.entries(newObj));
console.log(newMap2);

// map.set(newObj,123)
// console.log(map.size)

let newMap = new Map([
  [{}, "Sardor"],
  [{}, "Elena"],
]);
// *** key()
// for(let key of newMap.keys()){
// 	console.log(key)
// }// !name,name1
// ***values()
// for(let name of newMap.values()){
// 	console.log(name)
// } //!sardor,elena
// *** intries()
for(let all of newMap.entries()){
	console.log(all)
}//!['name','Sardor']['name1',"Elena"]

// const dataObject = { position: 'left' }
// const sameObject = dataObject

// const map = new Map()
// map.set(dataObject, 'value for dataObject')
// map.set(sameObject, 'value for sameObject')
// console.log(map.get(dataObject))
// ----------------------------------------------------

function aclean(arr) {
  let map = new Map();
  for (let i of arr) {
    let str = i.toLowerCase().split("").sort().join("");
	console.log(str)
    map.set(str, i);
  }
  console.log(map)
  return Array.from(map);
}

console.log(
  aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]))