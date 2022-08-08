class User{
    sex = 'male'
    email;// явное создание полей
    #password = 'якилька';//приватное поле
    #login = 'я не килька';
    static TYPE__ADMIN = 'admin';
    static TYPE__REGULAR = 'regular';
    static #maxInstanse = 2;
    static #instance = 0;
    constructor(name,email,userType){
        User.#instance++;
        if(User.#instance > User.#maxInstanse){
            console.log(User.#instance)
            throw new Error('Невозможно создать экземпляр класса User');
        }
        this.name = name;// неявное создание поля name
        this.email= email;
        this.type = userType
    }
    id = 'Начальное значение'
    type;
}


const myUser = new User('Andrew Tate','34',User.TYPE__ADMIN);


console.log(myUser.sex)// male (получение результата в момент инциализации)
/*
console.log(myUser.#password) //Uncaught SyntaxError
*/

console.log(myUser.type) // admin
console.log(myUser.TYPE__REGULAR)// undefined

//==============


const secondUser = new User();
const thirdUser = new User();
const fouthUser = new User()