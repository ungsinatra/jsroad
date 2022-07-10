
const animal ={
    jump:null,
    wolk(){
        if(!this.IsSleeping){
           return console.log('wolk-wolk')
        }
       return  console.log('rabbit is sleeping')
    },
    sleep(){
        this.IsSleeping = true
    },
    

}


const robbit = {
    name:'robbit black',
    __proto__:animal,
    
}
robbit.sleep();
robbit.wolk()

// ========================


const head = {
    glasses :1,
}

const table  = {
    __proto__:head,
    pen:1,
}

const bed  = {
    sheet:1,
    pellow:3,
    __proto__:table
}

const pocket = {   
    money:'2000 som',
    __proto__:bed
}

console.log(pocket.pen)// 1
console.log(bed.glasses)// 1




const homster  = {
    stomach : [],
    eat(food){
        this.foods = []
        return (()=>{
             this.foods.push(food)
             return this.stomach = [...this.foods]
        })();
    },

} 

const lazyH = {
    __proto__:homster,
    set name(name){
        return this._name = name;
    },
    get name(){
        return this._name;
    },

}
const speedyH = {
    __proto__:homster,
    set name(name){
        return this._name = name;
    },
    get name(){
        return this._name;
    },

}
speedyH.name = 'speedy'
console.log(speedyH.name);//speedy
speedyH.eat('apple')
console.log(speedyH.stomach)//apple

console.log(lazyH.stomach)//[]
lazyH.name = 'lazy';
lazyH.eat('pieapple')
console.log(lazyH.stomach)//pieapple

console.log(homster.stomach)
console.log(speedyH)

*/
//=========================================

const user = {
    name:'Alice',
    secondName:'Cooper',

    set fullName(name){
        [this.name,this.secondName] = name.split(' ')
    },
    get fullName(){
        return `NAME:${this.name}\nSECONDNAME:${this.secondName}`
    },

}



const user2 = {
    __proto__:user,
}


user2.fullName  = 'Sardor Mamyrov'





console.log(user2.fullName)
