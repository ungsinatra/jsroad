
/*

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       // meetup ссылается на room
room.occupiedBy = meetup; // room ссылается на meetup

console.log(JSON.stringify(room));
*/

//--------------------------------- JSON.parse(str,[reviver])

/*
let date = new Date()
let  srt = '{"name":"sarodr","second":[1,2,3,4,5],"date":"2017-11-30T12:00:00.000Z"}';
let jsonOne = JSON.parse(srt, (key,value)=>{
	return (key=="date")? new Date(value):value;


})

console.log(jsonOne.date.getDate())


let  srt = '{"name":"sarodr","second":[1,2,3,4,5],"date":"2017-11-30T12:00:00.000Z","love":[{"name":"Elena","birthday":"2000-11-26T12:00:00.000Z"}]}'
 srt = JSON.parse(srt,((key,value)=>{
	return (key == 'birthday')? new Date(value):value;

}))

console.log(srt.love[0].birthday.getDate())
*/



let newObj  = {
	name:'sardor',
}

let obj = {
	age:12,
}

obj.name= newObj.name;
newObj.age = newObj

// console.log(JSON.stringify(newObj,['name']))
console.log(JSON.stringify(newObj,((key,value)=>{
	return (key!=='age')?value:undefined
		
}),"**" ))//{"name":"sardor"}
