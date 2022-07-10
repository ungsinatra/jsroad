let obj = {
}


Object.defineProperty(obj,'name',{
    value:'sardor',
    writable:true,
    configurable:true,
    enumerable:true

})


console.log(Object.getOwnPropertyDescriptor(obj,'name'))
/*
{
  value: 'sardor',
  writable: true,
  enumerable: true,
  configurable: true
}
*/




'use strict'
const exObj = new Object();


Object.defineProperty(exObj,'sample',{
    
    writable:false,
    enumerable:true,
})



exObj.sample = false;//TyperError
delete exObj.sample// TypeError
console.log(exObj)

//=============================



let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

let sample = {};
Object.defineProperty(sample,'age',{
	value:15,

writable:true,

})

console.log(Object.getOwnPropertyDescriptor(sample),"age")



Object.preventExtensions(ObjProp)//запрещает добовлять навые свойства
ObjProp.price = '100000'

console.log(ObjProp)//typeError

/seal/
Object.seal(ObjProp)

delete ObjProp.car
ObjProp.add = 'addd';

console.log(ObjProp) // typeError (seal ограничивает выставляет всем свойством configure false(удалсить добавляеть нельзя)

/freaze/
Object.freeze(ObjProp) // заперщает добавлять,удалять,изменять свойтво(writable=flase,configure=false)
