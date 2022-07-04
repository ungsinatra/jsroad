const car = {
    _name:null,
    set name(name){
        this._name = name
        
    },
    get name(){
        console.log(this._name)
    }, 
    start() {
        this.status = true;
        return 'engine started...'
    },
    stop() {
        this.status = false;

        return 'engine was stoped'
    },
    drive() {
        this.gearbox.clutch = 'on';
        this.gearbox.speedH = 1;
        this.weels.breakes.handBrake = 'off'
        return 'driveing...'
    },
    engine: {
        status: null
    },
    engine: {
        status: null
    },

    weels: {
        counter: 4,
        breakes: {
            brakes: null,
            handBrake: null
        }
    },
    weels: {
        brakes: null,
        counter: 4,
        breakes: {
            handBrake: null
        }
    },
    weels: {
        counter: 4,
        breakes: {
            brakes: null,
            handBrake: null
        }
    },
    gearbox: {
        clutch: null,
        counterSpeed: 6,
        trasmission: 'manual',

    },

}





const tesla  = {
    __proto__:car
    
}

tesla.name = tesla 
console.log(tesla.name)