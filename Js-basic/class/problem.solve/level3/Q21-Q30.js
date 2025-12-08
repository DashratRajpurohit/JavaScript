function degit(x){
    var count = 0;
    for(let i = x; i>0; i=Math.floor(i/=10)){
        count++;
    }
    return(count);
}

console.log("Q21 == "+degit(Math.abs(-5854)));

var sum = 0;
var deg;
function degit1(x){
    for(let i = x; i>0; i=Math.floor(i/=10)){
        deg = i%10;
        sum += deg;
    }
    return(sum);
}

console.log("Q22 == "+degit1(855));

var sum = 1;
var deg;
function degit2(x){
    for(let i = x; i>0; i=Math.floor(i/=10)){
        deg = i%10;
        sum *= deg;
    }
    return(sum);
}

console.log("Q23 == "+degit2(55));


var sum = 0;
var deg;
function degit4(x){
    for(let i = x; i>0; i=Math.floor(i/=10)){
        deg = i%10;
        sum =sum*10 + deg;
    }
    return(sum);
}

console.log("Q24 == "+degit4(Math.abs(-585)));


var sum = 0;
var deg;
function degit5(x){
    for(let i = x; i>0; i=Math.floor(i/=10)){
        deg = i%10;
        sum =sum*10 + deg;
    }
    return(sum);
}
let n = 121;
(degit5(n)==n)? console.log("Q25 == yes"):console.log("Q25 == No");


function prim(x){
    for(let i=0;i<=Math.floor(x/2);i++){
        if(x%i===0 || x===1){
            console.log("Q26 == Not a prime no.");
            return;
        }
    }
    console.log("Q26 == Yes its a prime no.");
}
prim(1);

function prim2(x) {
    for (let j = 2; j <= x; j++) {
        let isPrime = true;

        for (let i = 2; i <= Math.floor(j / 2); i++) {
            if (j % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) console.log("Q27=> Prime =", j);
    }
}
prim2(5);

let x=5;
var a=0,b=1,c=0;
for(let i=1;i<=x;i++){
    if(i==1){
        console.log("Q28=> fibo = "+a);
        continue;
    }
    else if(i==2){
        console.log("Q28=> fibo = "+b);
        continue;
    }
    c = a+b;
    a=b;
    b=c;
    console.log("Q28=> fibo = "+c);
}

function gdc(a ,b){
    let result = 1;
    for(let i=1;i<=Math.min(a,b);i++){
        if(a%i===0 && b%i===0){
            result = i;
        }
    }
    return result;
}
console.log("Q29 == GDC ->"+gdc(20,100));


function lcm(a ,b){
    let result = 1;
    for(let i=1;i<=Math.min(a,b);i++){
        if(a%i===0 && b%i===0){
            result = i;
        }
    }
    return (a*b)/result;
}
console.log("Q30 == LCM ->"+lcm(4,6));