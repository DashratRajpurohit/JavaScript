function prsfectsq(num){
    let root = Math.floor(Math.sqrt(num));
    if(root*root==num){
        console.log("perfect squre");
    }
    else{
         console.log("Not perfect squre");
    }
}
let n =16;
prsfectsq(n);
for(let i=1;i<=n;i++){
    // console.log(i*i);
    if(i*i==n){
        console.log("true");
        return;
    }
}
console.log("false")