let arr = [1,2,3,4,5,6];
let res = [];
 let count =0;
for(let i=arr.length-1;i>=0;i--){
    res[count]= arr[i];
    count++;
}
console.log(res);
let res2 = arr.reverse();
console.log(res2);

let i=0;
let j=arr.length-1;
while(i==j){
    [arr[i],arr[j]]=[arr[j],arr[i]];
    i++;
    j--;
}
console.log(arr)