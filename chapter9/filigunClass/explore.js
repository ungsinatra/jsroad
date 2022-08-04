class Animal{
    constructor(name){
        this.name = name;
        this.speed = 0;
    }
    run(speed){
        this.speed = speed
        alert(`${this.name} имя ${this.speed}  скорость `)
    }
    stop(){
        this.speed = 0;
        alert(`${this.name} стоит/устал`);
    }
    arrest(){
        if(this.speed < 10){
             alert(`${this.name} для кокса ты медленый,снежок `)
        }else{
            alert(`${this.name} ты прям как ниггер,который бежит за коксом!`)
        }
    }
}

const animal = new Animal('мой щегол куча');




class Kucha extends Animal{
    constructor(name,skill){
        super(name);
        this.skill = skill

    }
    saySalamAleykum(){
        console.log(` ${this.name} скажи салам алейкум`)
    }
    stop(){
        super.stop();
        this.saySalamAleykum()
    }
}

const shegolKucha = new Kucha('KUCHA','smoke weed');


shegolKucha.saySalamAleykum()
shegolKucha.stop()
alert(shegolKucha.skill)