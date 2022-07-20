function foo(callback){
    const arr = [1,2,3,4];
    let outer = callback(arr)
    console.log(outer);
}



function fillterFn(array){
    some = array.filter(el =>  el%2==0 )
    return some;
}

function strArr(array){
    const str = array.join('-');
    return str;
}

foo(fillterFn)
foo(strArr)

//=====================

function doHomeWork(subj,cl){
    console.log(`starting my ${subj} home work`)
    cl(subj)
}   
function finish(subj){
    console.log('finished my ' + subj + ' home work' )
}

doHomeWork('math',finish);