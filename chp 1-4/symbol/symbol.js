const newSymbol = Symbol('new')
console.log(newSymbol)


const newSS = Symbol.for('name');
console.log(newSS)
console.log(Symbol.keyFor(newSS))