

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
    screenInfo;
    on(){
        this.powerStatus = true
        this.screen = true
        setTimeout(console.log('микроволновка включена...'),100);

    }
    off(){
        this.powerStatus = false;
        this.screen = false
        setTimeout(console.log('микроволновка выключена...',100));
    }
    start(){
        if(this.timer == 0 || Number.isNaN(this.timer)){
            return 'Таймер не задан!'
        }
        if(this.powerStatus){
            console.log(this.startProperty(this.timer,this.mode[this.waveMode]))
             this.screenInfo = setInterval(() => {
                console.log('идет разогрев еды...')
            }, 100)
            this.heating = setTimeout(() => {
                clearInterval(screenInfo);
                this.readySensor = true;
                setTimeout(console.log('Звук'),200);
                setTimeout(console.log('Готово...'),300);
            },this.timer*1000)
        }else{
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
        clearInterval(this.screenInfo)
        clearTimeout(this.heating);
        setTimeout(() => {
        console.log('разогрев остановлен!!');
        }, 400);
    }

    
}

const test = new Mircowave(6)
test.on()
test.start()
test.stop()
