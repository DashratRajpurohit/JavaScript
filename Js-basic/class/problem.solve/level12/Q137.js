function sum(a,max){
    if(a==0){
        console.log(max);
        return;}
    max = max+(a*a);
    sum(a-1,max);
}
let max = 0;
let a =2;
sum(a,max);