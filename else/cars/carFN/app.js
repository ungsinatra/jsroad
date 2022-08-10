console.log('something')
const btn = document.querySelector('.button');
const message = document.querySelector('.message');
const gearbox = document.querySelector('.gearBox');



function startListener(){
    message.textContent = '';
    btn.classList.add('hide');
    let randonValue = Math.random();
    (randonValue >= 0.5)?carStarted():carNotStarted('engine was not started');
     
}
function  gearBoxShitUP(fn){
    let shift = 1;

    const gearboxUperInterval = setInterval(() => {
        if(shift < 5){
            gearbox.textContent = shift;
            shift++
        }else{
            gearbox.textContent = 'N'
            clearInterval(gearboxUperInterval)
        }
    },1000);
}
function carStarted(){
    statusMessage(message,'engine started');
    gearBoxShitUP()
    setTimeout(carNotStarted,5000,'car was crashed')
}
function carNotStarted(text){
    btn.classList.remove('hide');
    statusMessage(message,text)
}

function statusMessage(status,text){
    status.textContent = text;
}



addEventListener('click',startListener);