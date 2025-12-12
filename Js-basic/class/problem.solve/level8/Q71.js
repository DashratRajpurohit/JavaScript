let arr = [1,2,3,4,5,6,7,8,9,37];
let res = [];

for(let ch in arr){
    if(arr[ch]%2==0){
        continue;
    }
    res.push(arr[ch]);
}
console.log(res)

console.log(arr.filter((value)=>{
    return value%2==1;
}))

for(let i = 0; i<arr.length;i++){
    if(arr[i]%2==0){
        arr.splice(i,1);
        i -=1;
    }
}
console.log(arr)