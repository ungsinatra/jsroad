/* function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start(); */

  'use strict'
  class Clock{
    constructor({template}){
      this.template = template
      this.timer;
    }
    render(){
      this.date = new Date( )
      this.hours =  (this.date.getHours()<10)? '0'+this.date.getHours():this.date.getHours();

      this.minutes = (this.date.getMinutes()<10)? '0' + this.date.getMinutes(): this.date.getMinutes();
      this.seconds = (this.date.getSeconds()<10)? '0' + this.date.getSeconds():this.date.getSeconds();
      this.tmp  = this.template.replace('h',this.hours).replace('m',this.minutes).replace('s',this.seconds);
      this.output = this.tmp
      console.log(this.output);
    }

    start(){
      this.render();
      this.timer = setInterval(this.render.bind(this), 1000);
    }
    stop(){
      clearInterval(this.timer);
    }
  }


const clock = new Clock({template: 'h:m:s'});
clock.stop()
clock.start()