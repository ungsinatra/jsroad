
function askPassword(ok, fail) {
	let password = prompt("Password?", '');
	if (password == "rockstar") ok();
	else fail();
  }
  
  let user = {
	name: 'Вася',
  
	loginOk() {
	  alert(`${this.name} logged in`);
	},
  
	loginFail() {
	  alert(`${this.name} failed to log in`);
	},
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


// ==============================================================

function askPassword(ok, fail) {
	// let password = prompt("Password?", '');
	let password = 'rockstar'
	if (password == "rockstar") ok();
	else fail();
  }
  
  let user1 = {
	name: 'John',
	login(result) {
	  console.log( this.name + (result ? ' logged in' : ' failed to log in') );
	}
  };
  
  askPassword(user1.login.bind(user1,true),user1.login.bind(user1,false));







  