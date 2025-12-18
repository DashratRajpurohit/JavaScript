let sum = 0;
function rep(a){
    if(a==0)return console.log(sum);
    if(a%2==0) sum +=a;
    rep(a-1);
}

let a =10;
rep(a);