let arr = [1,2,3,4,5,6];

let res = [];
res.push(arr[arr.length-1])
for(let i =0; i<arr.length-1;i++){
    res.push(arr[i])
}
console.log(res)

arr.unshift(arr[arr.length-1]);
arr.pop()
console.log(arr)