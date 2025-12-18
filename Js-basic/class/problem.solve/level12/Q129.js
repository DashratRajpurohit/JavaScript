let sum = 0;
function rep(a,or){
    if(a==0){
        console.log(sum==or?"true":"fales");
        console.log(sum)
        console.log(or)
        return;
    }
    if(or%a==0) sum +=a;
    rep(a-1,or);
}

let a =6;
let or = a;
rep(a,or)