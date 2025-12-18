function sum(a){
    if(a==0)return;
    console.log(a)
    sum(a-1);
}

let a =5;
sum(a);