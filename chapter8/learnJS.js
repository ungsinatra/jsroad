/*

В приведённом ниже коде создаются и изменяются два объекта.
Какие значения показываются в процессе выполнения кода?
*/

const animal = {
    jumps:null
};


const rabbit = {
    __proto__:animal,
    jumps:true,

}


alert( rabbit.jumps ); // true 

delete rabbit.jumps;

alert( rabbit.jumps ); // null

delete animal.jumps;

alert( rabbit.jumps ); // undefined
//------------------------------------------------


/*
С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
*/

let head = {
    glasses: 1
  };
  
  let table = {
    __proto__:head,
    pen: 3
  };
  
  let bed = {
    __proto__:table,
    sheet: 1,
    pillow: 2
  };
  
  let pockets = {
    __proto__:bed,
    money: 2000
  };

console.log(pockets.pen)//3
console.log(bed.glasses)//1
//------------------------------------------------

/*
Куда будет произведена запись?

Объект rabbit наследует от объекта animal.

Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
*/


const animal2 = {

    eat(){

        this.full = true
    }
}

const cat = {

    __proto__:animal2,
    
}
cat.eat()//this cat 
console.log(cat)


//--------------------------------------------


let homster = {
    eat(food){
        this.stomach = [food]
    }

}


const speedy = {
    __proto__:homster,
}


const lazy = {
    __proto__:homster,
}

speedy.eat('apple')
speedy.eat('banana')

console.log(speedy.stomach)//['banana']

lazy.eat('banana')
console.log(lazy.stomach)//['banana']