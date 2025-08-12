a=2
b=3
/*
2+3=5
5-3=2
-----
7+6=7

*/
console.log("a = "+a)
console.log("b="+b)

function check(y){
    if(y%2==0){
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
function data(p){
    for(let i=1;i<=10;i++){
        console.log(p*i);
    }
}

console.log(`${a}+${b}=${a+b}`)
console.log(`${a+b}+${b}=${a}`)
console.log("------------------")
let y = ((a)+(a+b))
let y1 = ((b)+b)
let y3 = ((a+b)+a)
console.log(`${y}+${y1}=${y3}`)

check(y)
check(y1)
check(y3)
data(y)
data(y1)
data(y3)
