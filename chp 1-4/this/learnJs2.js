let ladder = {
	step: 0,
	up() {
	  this.step++;
	  console.log(this.step)
	},
	down() {
	  this.step--;
	},
	showStep: function() { // показывает текущую ступеньку
	  alert( this.step );
	}
  };

  ladder.up().up().down().showStep();