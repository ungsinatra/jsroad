let user = {
  name: "Василий Иванович",
  age: 35,
};


let jsonUser = JSON.stringify(user,null,2);

console.log(jsonUser);

let userToObj = JSON.parse(jsonUser);
console.log(userToObj)