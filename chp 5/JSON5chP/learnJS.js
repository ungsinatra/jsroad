// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

let userToJn = JSON.stringify(user);
let jsonToObj = JSON.parse(userToJn);
// console.log(userToJn)
// console.log(jsonToObj)


// Исключить обратные ссылки
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;


let res =  JSON.stringify(meetup, function replacer(key, value) {
  if(value =='meetup'){
    undefined
  }
});

console.log(res)