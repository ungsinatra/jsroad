
const bmw = new Car('bwm','61000$','2019',{
    model:'bwm m2',
    engine:'3l',
    hoursePower:'414hp',
    torque:'557NM',
    driveSystem:'raer wheel',
    body:'coupe',
    gearbox:'6 sheafts gibrid'
});

bmw.showConfig();
/* {
  model: 'bwm m2',
  engine: '3l',
  hoursePower: '414hp',
  torque: '557NM',
  driveSystem: 'raer wheel',
  body: 'coupe',
  gearbox: '6 sheafts gibrid'
}
*/

bmw.showProperty('gearbox')//6 sheafts gibrid
console.log(bmw.price)//61000$