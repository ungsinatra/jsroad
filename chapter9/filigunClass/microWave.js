

class HungryPerson{
    constructor(selectWaveMode,timer){
        this.WaveMode = selectWaveMode;
        this.timer = timer;
    }

    turnOn(){

    }
} 
class Mircowave extends HungryPerson{
    
    constructor(timer = 0,waveMode = 'medium'){
        super()
        this.waveMode = waveMode
        // super.selectWaveMode = this.mode[this.waveMode];????
        super.timer = timer;
    }
    mode = {
        low:'20% power',
        medium:'50% power',
        hight:'100% power'
    }
    powerStatus = false
    screen = false;
    readySensor = false;
    heating;
    heatingSensor = false
    screenInfo;
    on(){
        if(!this.powerStatus){
        this.powerStatus = true
        this.screen = true
        setTimeout(console.log('микроволновка включена...'),100);
        }else{
            console.log('микроволновка уже включена!!!');
        }

    }
    off(){
        if(this.powerStatus){

        this.powerStatus = false;
        this.screen = false
        setTimeout(console.log('микроволновка выключена...',100));
        }else{
            console.log('Включите микроволновку!!!')
        }
    }
    start(){
        if(this.timer == 0 && Number.isNaN(this.timer)){
            return console.error('таймер не задан!!')
        }
        if(this.powerStatus && !this.heatingSensor){
            this.heatingSensor = true;
            console.log(this.startProperty(this.timer,this.mode[this.waveMode]))
             this.screenInfo = setInterval(() => {
                console.log('идет разогрев еды...')
            }, 100)
            this.heating = setTimeout(() => {
                clearInterval(this.screenInfo);
                this.readySensor = true;
                setTimeout(console.log('Звук'),200);
                setTimeout(console.log('Готово...'),300);
            },this.timer*1000)
        }
        
        
        else{
            console.log(' микроволновка не влкючена!!!')
            
        }
        
    }

    startProperty(time,mode){
        return `
        Таймер: ${time} минут 
        Режим: ${mode}
        `

    }
    stop(){
        if(this.heatingSensor){

        clearInterval(this.screenInfo)
        clearTimeout(this.heating);
        setTimeout(() => {
        console.log('разогрев остановлен!!');
        }, 400);
        }else{
            console.log('Уже остановлен!!!');
        }
    }

    
}

const test = new Mircowave('asdasd')
test.on()
test.stop()