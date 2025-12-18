function sum(a,b,c){
    if(a<b && a<c) return a;
    else if(b<a && b<c) return b;
    return c;
}

let a =21;
let b =5;
let c =23;
console.log(sum(a,b,c));