let sum = 0;
function rep(a,or){
    if(a==0){
        console.log(sum-or==or?"true":"fales");
        return;
    }
    if(or%a==0) sum +=a;
    rep(a-1,or);
}

let a =28;
let or = a;
rep(a,or)