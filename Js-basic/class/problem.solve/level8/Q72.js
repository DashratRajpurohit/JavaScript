let arr = [1,2,3,3,4,4,5,6,7,8,8];
let res = [];

const newarr = [...new Set(arr)];
// console.log(newarr);

for(let i=0;i<arr.length;i++){
    
        if(arr[i]!=arr[i-1]){
            res.push(arr[i])
        }        
}
console.log(res)

let obj = {};
let res2 = [];

for(let i=0;i<arr.length;i++){
    
        if(obj[arr[i]]){
            obj[arr[i]]++
        }        
        else{
            obj[arr[i]]
        }
}
