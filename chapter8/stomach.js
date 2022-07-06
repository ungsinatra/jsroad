
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
