let arr = [1,2,3,4,5,6];
let res = [];
for(let i=arr.length-1;i>=0;i--){
    res[i]= arr[i];
    ;
}
console.log(res);
let res2 = arr.copyWithin();
console.log(res2);