
const ferrari = new Car('ferrari','555000$','2019',{
    model:'ferrari testorosso',
    engine:'4.9l',
    hoursePower:'475hp',
    torque:'457NM',
    driveSystem:'raer wheel',
    body:'coupe',
    gearbox:'6 sheafts mechanic'
});

ferrari.showConfig();
/* {
    model:'ferrari testorosso',
    engine:'4.9l',
    hoursePower:'475hp',
    torque:'457NM',
    driveSystem:'raer wheel',
    body:'coupe',
    gearbox:'6 sheafts mechanic'
}
*/

bmw.showProperty('engine')//'4.9l'
console.log(bmw.price)//555000$