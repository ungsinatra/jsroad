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
  aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"])
);



