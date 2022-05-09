let a = 0;
let b = 0;
console.log(a == b); //true

console.log(a === b); //fasle

let false1 = false;
let treue = true;

console.log(false1 < treue); //true так как 0<1

let space = "";
console.log(space == false1); //true так как 0==0
console.log(space < false1); //fasle так как 0!<0
console.log(space <= false1); //true так как 0=0
console.log(space === false1); //false так как разные типы

// ?
let obj = {
  name: "asda",
  age:12,
  toString() {
    return `{name: "${this.name}"}`;
  },
  valueOf(){
	  return this.age
  }
};

let newStr = 12;
let res = obj.age==newStr
console.log(res);



let arr =[];
let obj1 = arr

console.log(arr==obj1)// true так как они ссылочный тип данных поэтому сравниваються ссылки




let und = undefined;
let nal = null


console.log(und ==nal)//true ебаное исключение 


console.log(NaN===NaN)//fasle потому что он не равен ни чему при использовании опертора сравении 

NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
