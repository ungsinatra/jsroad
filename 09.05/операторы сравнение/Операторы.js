let a = 0;
let b = 0;
console.log(a == b); //true

console.log(a === b); //true

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



let newNum = '1';
let newnub2 = 1
console.log(newNum!==newnub2) //true так как !== проверяет пит а потом сравнивает



console.log(NaN===NaN)//fasle потому что он не равен ни чему при использовании опертора сравении 

NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true




console.log(undefined==0)//false


console.log(undefined!=0)//true
console.log(null==0)//false ебанное исключение 
console.log(undefined==null)//true ебанное исключение номер 2




// ----------------------------------------------------------------

console.log(Number.isFinite(12))//TRUE так как число дает число


console.log(Number.isFinite('12'))//false так как срока не являеться числом

console.log(Number.isFinite(Infinity))//False  исключение 

// ---------------------------------------------------------------- isFinite()

console.log(isFinite('12'))//TRUE так как.метод просто isFinite() сначало переобразует в число потом выдает число
console.log(isFinite(false))//TRUE так как.метод просто isFinite() сначало переобразует в число потом выдает число
console.log(isFinite(true))//TRUE так как.метод просто isFinite() сначало переобразует в число потом выдает число

// ---------------------------------------------------------------------number.IsNaN()
console.log(Number.isNaN(12))//fale
console.log(Number.isNaN('1231')) //false
console.log(Number.isNaN(true)) //false
console.log(Number.isNaN(NaN)) //true

// -----------------------------------------------------------------isNaN()
console.log(isNaN('asdad'))//true так как строка при переводе даст NaN
console.log(isNaN(12))//false число не может быть NaN
console.log(isNaN(true))//false true дасть при переводе число
console.log(isNaN(false))//false fasle дасть при переводе число