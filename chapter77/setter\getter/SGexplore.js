let sampleUser = {
    set name(value){
        this._name = value;
    },
    get name(){
        console.log(this._name);
    }
}

sampleUser.name = 'Oleg';
sampleUser.name//oleg




//=========================



const newSample = new Object();
Object.defineProperty(newSample,'addProp',{
    set(property){
        let propArr = property.trim().split('=');
        let [key,value] = propArr;
        value = JSON.stringify(value)
        newSample[key.trim()] = JSON.parse(JSON.stringify(value));
    }
    
})

newSample.addProp = " name = asas " ;
newSample.addProp = " age = 15 " ;
newSample.addProp = " sample =808 " ;


console.log(typeof newSample.obj)
/*
{ name: 'asas', age: '15', sample: '808' }
*/


let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        alert("должно быть более 4 символов");
        return;
      }
      this._name = value;
    }
  };
  
  user.name = "Oleg";
  alert(user.name); // Oleg
  
  user.name = ""; 