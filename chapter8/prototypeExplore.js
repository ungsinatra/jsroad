// function getProto(){
//     console.log()
// }

// function showProto (){
//     console.log
// }

// console.log(getProto.__proto__ === showProto.__proto__)//true;



// const arr = [1,2,3 ]

// console.log(arr)


// const obj  = {
//     name:'sardor',
//     age:12

// }
// // console.log(obj)



// //=======================


// let newObj = {
// // __proto__:obj


// }


// let newObj2 = {


// }


// //console.log(newObj.__proto__ === newObj2.__proto__)//true proto = object;
// //console.log(newObj)


// let newArr = [];
// let newArr2 = []
// //newArr.__proto__ = obj
// //console.log(newArr.__proto__ === newArr2.__proto__)//false(newArr proto = obj)


// console.log('obj:'+ ' ' + newObj.__proto__)
// console.log(newArr.__proto__)


// console.log(newArr2)//proto = Array 


// //==================================
// // пример как понять прото и как отличить от prototype

// const promise1  = new Promise()// promise.prototype(new Promise)
// const str = '123'// String prototype(proto==new String)
// const age = 14//Number.prototype(proto==number)
// function proto(){

// }//prototype.function()
// class bbs {}//prototype.function
// let newbbs = new bbs// ptototype.bbs
// const booll = true//prototype.boolean

// //=================================



//=====================================

class Samurai {
    constructor(name){
        this.name = name;
    }

    hello(){
        console.log(this.name);
    }
}




let shogun = new Samurai('eblan');
console.log(Samurai.__proto__.__proto__)
console.log(`shogun proto-proto:`)
console.log(shogun.__proto__.__proto__)//Object.prototype
console.log(`shogun constructor:`)
console.log(shogun.__proto__.constructor.__proto__)//funtion.prototype
console.log(`shogun proto-proto-proto:`)
console.log(shogun.__proto__.__proto__.__proto__)//funtion.prototype

