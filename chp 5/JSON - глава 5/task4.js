let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;
let res = JSON.stringify(meetup, function replacer(key, value) {
  if (key == "self") {
    return key = undefined;
  } else if (key == "occupiedBy") {
	return value
  } else if(key =='place'){
    return value.number;
  }
  return value
});
console.log(res);
