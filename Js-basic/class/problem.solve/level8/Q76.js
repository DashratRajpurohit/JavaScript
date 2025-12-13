let arr = [1,2,3,4,5,6];

let res = [];

for(let i =1; i<arr.length;i++){
    res.push(arr[i])
}
res.push(arr[0])
console.log(res)


arr.push(arr[0])
arr.shift(arr[0]);
console.log(arr)