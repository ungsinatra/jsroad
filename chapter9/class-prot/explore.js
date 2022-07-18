class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} стоит.`);
    }
  }
  
  let animal = new Animal("pet");


  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} прячется!`);
    }
  }
  
  let rabbit = new Rabbit("Белый кролик");
  
  rabbit.run(5); 
  rabbit.hide(); 


  ///



  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} прячется!`);
    }
  
    stop() {
      super.stop(); 
      this.hide(); 
    }
  }
  
  let rabbit = new Rabbit("Белый кролик");
  
  rabbit.run(5); // Белый кролик бежит со скоростью 5.
  rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!



  //==============================
  class Car {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Nissan extends Animal {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
  }
  
  let nissan = new Nissan("Nissan gtr"); 
  alert(nissan.name);