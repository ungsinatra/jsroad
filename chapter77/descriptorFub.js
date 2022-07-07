
Object.prototype.FubricDescriptors = function(prop,value,...flags){
    let[writable,enumerable,configurable] = flags
    Object.defineProperty(this,prop,{
        value:value,
        writable:writable,
        enumerable:enumerable,
        configurable:configurable,
    })
    return Object.getOwnPropertyDescriptor(this,prop)
}

const obj = new Object()

Object.prototype.getSum = function(obj){
    let count = 0
    if(typeof obj ==='object'){
        for(let value of Object.values(obj)){
            if(typeof value === 'number'){
                count++
            }else{
                count+=Object.prototype.getSum(value)
            }
        }
    }
    return count
}




console.log(obj.FubricDescriptors('age',14,true,true,true));
obj.total =14
obj.tot = {
    price:14,
    ppp:{
        price1:13,
        price:133,
    }
}
console.log(obj.getSum(obj))//5