function Car(model, years, price) {
  this.model = model || "Tesla";
  this.years = years || "2022";
  this.price = price || 2e6;
  this.showfeatures = () => {
    return console.log(
      `Model is ${this.model} and years is ${this.years} and the end price is ${this.price}`
    );
  };
}

let newCar2 = new Car();
newCar2.showfeatures();
let newCar = new Car("Tesla model 3", 2022, 2000000);
newCar.showfeatures();
console.log(newCar)
console.log(Car)




let obj = {
	car:'Tesla model s',
	year:2022,
	color:'black',
	hoursePower:'460hp',
	showColor(){
		console.log(this.color)
	}
}
let obj2 = {
	car:'Tesla model 3',
	year:2022,
	color:'Yellow',
	hoursePower:'460hp',
	characteristic:{
		tyre:'21inch',
		batary:'580 miles',
		showTyres(){
			console.log(this.tyre)
		}
	},
	showColor(){
		console.log(this.color)
	}
}