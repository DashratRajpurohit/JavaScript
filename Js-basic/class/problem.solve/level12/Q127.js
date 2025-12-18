let sum = 0;
function rep(a){
    if(a==0)return console.log(sum);
    if(a%2==0 || a%3==0) sum++;
    rep(a-1);
}

let a =10;
rep(a);