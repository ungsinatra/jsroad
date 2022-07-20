function each(callback,arr){
    const res = arr.map(el => callback(el))
    return res
}

function square(item){
    return item*2;
}

console.log(each(square,[1,23,4,4]))

///====================================


function getRStr(arr,cl) {
    const result = arr.map(str => cl(str,upperCase))
    return result;
}

const upperCase = (str =>{
    const uppered = str[0].toUpperCase() + str.slice(1);
    return uppered
}) 
function reverseElement(string,clFn){
    const reversedStr = string.split('').reverse().join('');
    return clFn(reversedStr);
}


console.log(getRStr(['sardor','sardor','sardor'],reverseElement))//[ 'Rodras', 'Rodras', 'Rodras' ]
