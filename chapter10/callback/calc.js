function calc(first,second,operator,outerCB){
    let res;
    if(operator=='+'){
        res = sum(first,second)
        return outerCB(res)
    }else if(operator =='-'){
        res = neg(first,second);
        return outerCB(res);
    }else if(operator =='*'){
        res = multy(first,second);
        return outerCB(res);
    }else if(operator =='/'){
        res = div(first,second);
        return outerCB(res);
    }

}

function template(result){
    return `
    <div class="calc">
        <h1 class="calc__res">${result}</h1>
    </div>
    `
}
function outer(res){
    let calcWrapper = document.querySelector('.wrapper');
    calcWrapper.innerHTML = template(res);
    
}
function sum(a,b){
    return (Number(a)&&Number(b))?a+b:console.error('значени не число');
}

function neg(a,b){
    return (Number(a)&&Number(b))?a-b:console.error('значени не число');
}
function multy(a,b){
    return (Number(a)&&Number(b))?a*b:console.error('значени не число');
}
function div(a,b){
    return (Number(a)&&Number(b))?a/b:console.error('значени не число');
}
calc('ad',12,'/',outer);