// let newNum = 100.123;
// let num  = new Number(100);
// let c  = Number(num);

// console.log(typeof c);

//Number.IsNaN() and isNaN();
// let someNumber= 13;
// let someStr = undefined
// let number = Number.isNaN(someStr);
// let str = undefined
// let newNumber = isNaN(str);

// console.log(number);//fasle
// console.log(newNumber)//true

//Number.IsFinite() and IsFinite()

// let number = '123';
// let strNumber = '123';

// let newNumber = Number.isFinite(number);
// let someNumber = isFinite(strNumber)

// console.log(newNumber);//false
// console.log(someNumber);//true

// Number.ToString

// let number = 123;

// let str = number.toString(2);

// console.log(typeof str); //typeof string
// console.log(str); //1111011 2 сис
// console.log(String(number)); //'123'



// Number.parseInt() and global.parseInt()


// let str = ' 10.12fuckyou';
// let newStr = 'fuck122';

// let rs = Number.parseInt(str)
// let rs2 =parseInt(newStr)

// console.log(rs)//123- number
// console.log(rs2)//NAN -number


// Number.parsefloat() 

// let str = ' 10.12fuckyou';
// let newStr = 'fuck122';

// let rs = Number.parseInt(str)
// let rs2 =parseInt(newStr)

// console.log(rs)//123.12- number
// console.log(rs2)//NAN -number

// number.toFixed();

let  number  = 12.956;
let newNUmber = number.toFixed(2);
console.log( typeof newNUmber)//12.96
